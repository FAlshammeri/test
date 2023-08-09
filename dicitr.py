import pandas as pd
import json


path = 'd:\\Users\\FAS\\Documents\\Twitter_Tracker\\New folder\\'
#file = path+'anb_bank.json'

file = open(path+'alrajhibank.json', encoding='utf-8')

file = json.loads(file.read())

tags = []
for items in range(len(file['data'])):
    
    try:
        ftag = file['data'][items]['entities']['hashtags'][0]['tag']
    except:
        ftag= ''  
    tag = {
        'ind': items,
        'tag': ftag
    }
    tags.append(tag)


tags
