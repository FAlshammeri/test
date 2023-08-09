import tweepy


bearer_token = 'AAAAAAAAAAAAAAAAAAAAAPWupAEAAAAA7%2FrkoTwu7uHerI948oFALiYKyxI%3DXFT9Ods3tmz3IWIgyqi4KNQHMP2GLhsauZiLklF2Q5BCkmOprF'

client = tweepy.Client(bearer_token)

# Get Users

# This endpoint/method returns a variety of information about one or more users
# specified by the requested IDs or usernames

user_ids = 'sanozi001'

# By default, only the ID, name, and username fields of each user will be
# returned
# Additional fields can be retrieved using the user_fields parameter
response = client.get_users(usernames=user_ids, user_fields=["profile_image_url"])

for user in response.data:
    print(user.username, user.profile_image_url)

