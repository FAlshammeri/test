from pygooglenews import GoogleNews
import pandas as pd
gn = GoogleNews(lang = 'ar', country = 'sa')
gn.geo_headlines('Saudi arabia')

def get_titles():
    articles = []
    
    #newsitems = gn.topic_headlines('business')
    #newsitems = gn.geo_headlines('Saudi arabia')

    newsitems = gn.topic_headlines('business')
    newsitem = newsitems['entries']
    
    for item in newsitem:
        article = {
            'title':item.title,
            'link': item.link,
            'Puplished': item.published
                      
        }
        articles.append(article)
    return articles

df = pd.DataFrame(get_titles())
print(df)
