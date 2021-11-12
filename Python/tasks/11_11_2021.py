telebeler=[
    {
    'ad':'Samir',
    'soyad':'Hemidov',
    'yas':30
    },
    {
    'ad':'Memmed',
    'soyad':'Salamov',
    'yas':20
    },
    {
    'ad':'Aliye',
    'soyad':'Qurbanova',
    'yas':16
    },
    {
    'ad':'Sahil',
    'soyad':'Qeniyev',
    'yas':45
    },
    {
    'ad':'Ehmed',
    'soyad':'Qeniyev',
    'yas':50
    }
    
    
]

# Butun adlari ekrana cap edin
for i in range(len(telebeler)):
    print(telebeler[i]['ad'])

# Istidadecilerin yaslarinin cemini tapin
k=0
for i in range(len(telebeler)):
    print(telebeler[i]['yas'])
    k= k + telebeler[i]['yas']
print(k)

# adi Ehmed olan istifadecinin butun melumatlarini ekrana cap edin
for i in range(len(telebeler)):
    if (telebeler[i]['ad']) == 'Ehmed':
        print(telebeler[i])

# İstifadecilerin yas ortalamasini tapin. Yasi ortalama yasdan boyuk olan istifadecilerin melumatlarini ekrana cap edin
for i in range(len(telebeler)):
    if (telebeler[i]['yas'])>30:
        print('Yaşı yuxarı olan tələbələr:')
        print(telebeler[i])
    elif (telebeler[i]['yas'])<30:
        print('Yaşı aşagı olan tələbələr:')
        print(telebeler[i]) 


# findUser(userName) adli metod yaradin 
# daxil edilen ada əsasən o istifadecinin butun melumatlarini ekrana cap etsin
findUser=input('Adı daxil edin: ')
for i in range(len(telebeler)):
    if findUser==(telebeler[i]['ad']):
        print(telebeler[i])       