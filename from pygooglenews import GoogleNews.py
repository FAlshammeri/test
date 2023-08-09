from bs4 import BeautifulSoup as soup
from urllib.request import urlopen
import pandas as pd

news_url = "https://news.google.com/rss/search?q=site:twitter.com/alrajhibank&hl=ar&gl=SA&ceid=SA:ar"
Client = urlopen(news_url)
xml_page = Client.read()
Client.close()

soup_page = soup(xml_page, "xml")
news_list = soup_page.findAll("item")
articles = []
for news in news_list:    
    article = {
            'title':news.title.text,
            'link': news.link.text,
            'Puplished': news.pubDate.text
                      
        }
    articles.append(article)


df = pd.DataFrame(articles)
print(df)
df.to_csv('C:\\Users\\FAS\\Documents\\tet.csv')
