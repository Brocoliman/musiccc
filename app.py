from flask import Flask, make_response, render_template, request, redirect, url_for, abort

def create_app():
    app = Flask(__name__)
    return app

app = create_app()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/playlists")
def playlists():
    return render_template("playlists.html")

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')