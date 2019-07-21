#!/usr/bin/env python3

import connexion
import flask
from openapi_server import encoder
from flask_cors import CORS

app = connexion.FlaskApp(
    __name__, specification_dir='../openapi_server/openapi/')
app.app.static_folder = '../webapp/build/static/'
cors = CORS(app.app, resources={r"/api/*": {"origins": "*"}})

@app.route('/', defaults={'file': 'index.html'})
@app.route('/<file>')
def webapp(file):
    return flask.send_file('../webapp/build/{}'.format(file))

def main():
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('openapi.yaml',
                arguments={'title': 'Assertio - Assertion library API'},
                pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
