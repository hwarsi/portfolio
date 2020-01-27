from flask import Flask, render_template, jsonify

portfolio_app = Flask(__name__)

@portfolio_app.route("/home")
def homePage():
    return render_template("portfolio.html")

if __name__ == "___main___":
    portfolio_app.run()
