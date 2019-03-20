from flask import Flask, render_template
from py2neo import Graph
app = Flask(__name__)
 

@app.route("/")
def hello():
    return render_template('home.page.html')
 
if __name__ == "__main__":
    graph = Graph("bolt://localhost:7687",auth=("neo4j","1234"))
    
    resultado = graph.run("MATCH (a) RETURN a;")
    #n=0
    #for rec in resultado:
    #    print(rec["a"])
    #    n = n+1
    #print("registros totales"+ str(n))
    app.run()


