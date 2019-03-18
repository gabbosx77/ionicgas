from flask import Flask, render_template
from py2neo.ogm import GraphObject, Property, RelatedTo
app = Flask(__name__)
 
@app.route("/")
def hello():
    return render_template('home.page.html')
 
if __name__ == "__main__":
    app.run()

