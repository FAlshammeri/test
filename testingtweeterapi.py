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


#
BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPWupAEAAAAA7%2FrkoTwu7uHerI948oFALiYKyxI%3DXFT9Ods3tmz3IWIgyqi4KNQHMP2GLhsauZiLklF2Q5BCkmOprF'
#

test = connect_to_endpoint(BEARER_TOKEN, 452138139, next_token=None)
test