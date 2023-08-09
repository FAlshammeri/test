import nltk
#nltk.download()

#print(nltk.word_tokenize('تجربة تقسيم الكلمات في بايثون',language= 'arabic'))
word = 'تجربة تقسيم الكلمات في بايثون'
tk = nltk.word_tokenize(word)
print(tk) 

