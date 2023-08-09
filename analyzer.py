import requests

def auth_header(bearer_token):
  return {"Authorization": "Bearer {}".format(bearer_token)}

def connect_to_endpoint(bearer_token, user_id, next_token=None):
    headers = auth_header(bearer_token)
    
    if (next_token is not None):
        url = "https://api.twitter.com/2/users/{}/tweets?max_results=100&pagination_token={}&tweet.fields=context_annotations".format(user_id,
                                                                                                           next_token)
    else:
        url = "https://api.twitter.com/2/users/{}/tweets?max_results=100&tweet.fields=context_annotations".format(user_id)
    response = requests.request("GET", url, headers=headers)
    
    if response.status_code != 200:
      return response.status_code
    return response.json()

def user_id(bearer_token, username):
  headers = auth_header(bearer_token)
  url = "https://api.twitter.com/2/users/by/username/{}".format(username)
  response = requests.request("GET", url, headers=headers).json()
  if 'data' in response:
    return response['data']['id']
  else:
    return None

def analyze(bearer_token, username):
    count = 0
    
    # Adjust this limit to explore more than 1000 Tweets
    max_results = 500  
    
    annotation_count = dict()
    
    id = user_id(bearer_token, username)
    
    if id is None:
      return "Invalid username. Try a different username."
    
    json_response = connect_to_endpoint(bearer_token, id)
    
    while count < max_results:        
        if json_response == 401:
          return "Invalid bearer token. Please use a valid bearer token from your developer portal."
        result_count = json_response['meta']['result_count']
        if 'next_token' in json_response['meta']:
            next_token = json_response['meta']['next_token']
        if result_count is not None and result_count > 0 and next_token is not None:
            for tweet in json_response['data']:
                if "context_annotations" in tweet:
                    annotations = tweet['context_annotations']
                    for annotation in annotations:
                        if 'entity' in annotation:
                            entity = annotation['entity']
                            if 'name' in entity:
                                name = entity['name']
                                if name in annotation_count:
                                    annotation_count[name] = annotation_count.get(name) + 1
                                else:
                                    annotation_count[name] = 1
            count += result_count
            json_response = connect_to_endpoint(bearer_token, id, next_token)
        else:
            break
    res = ''
    for w in sorted(annotation_count, key=annotation_count.get, reverse=True)[:10]:
        res += w +' : '+str(annotation_count[w])+' Tweets\n'
    message = 'Top 10 topics that this user Tweets about (based on most recent 500 Tweets)\n1 Tweet may have more than one entities:\n\n'
    return message+res
  
  