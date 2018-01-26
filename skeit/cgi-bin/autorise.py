# !/usr/bin/env python3
import cgi
import sqlite3

f = cgi.FieldStorage().getfirst("autorise") 
db = sqlite3.connect("account.db")
coursor = db.cursor()


coursor.execute("""CREATE TABLE IF NOT EXISTS (
		mail TEXT PRIMARY KEY,
		password VARCHAR(20),
		name VARCHAR(30),
		lastname VARCHAR(28),
		pol VARCHAR(2),
		age INT
		)""")


if f == "Войти":
	f = cgi.FieldStorage().getfirst("userMail")
	q = cgi.FieldStorage().getfirst("userPass")
	mails = coursor.execute("""SELECT mail,password FROM accounts""")
	f = (f,q)
	print("content-type:text/html")
	print("")
	print(x)
	for x in mails:
		print("content-type:text/html")
		print("")
		print("{0}{1}".format(x,mails))
		# if x[0] == f[0] and x[1] == f[1]:
		# 	print("Вы успешно авторизовались")
		# 	coursor.execute("""SELECT * FROM accounts WHERE mail == {}""".format(f[0]))
		# 	mails = coursor.fetchall()
		# 	ins = """INSERT INTO accounts VALUES(?, ?, ?, ?, ?, ?)"""
		# 	data = mails[0],mails[1],mails[2],mails[3],mails[4],mails[5]
		# 	coursor.execute(ins, data)
		# 	print("content-type:text/html")
		# 	print("")
		# 	print("Вы успешно вошли")
		# 	break
	# else:
	# 	print("content-type:text/html")
	# 	print("")
	# 	print("Вы неправильно ввели логин или пароль")
elif f == "Зарегестрироваться":
	f = cgi.FieldStorage().getfirst("userMail")
	q = cgi.FieldStorage().getfirst("userPass")
	f=[str(f),str(q)]
	q = cgi.FieldStorage().getfirst("userName")
	f.append(str(q))
	q = cgi.FieldStorage().getfirst("userLastName")
	f.append(str(q))
	q = cgi.FieldStorage().getfirst("pol")
	f.append(str(q))
	q = cgi.FieldStorage().getfirst("userAge")
	f.append(str(q))

	ins = """INSERT INTO accounts VALUES(?, ?, ?, ?, ?, ?)"""
	data = f[0],f[1],f[2],f[3],f[4],f[5]
	coursor.execute(ins, data)
	print("content-type: text/html")
	print("")
	print("qwqeqwweqwwqwweeqwqwwee")
db.commit()

coursor.close()
db.close()
