import http.server
import socketserver
import json

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/promotions':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            with open('data.json', 'r') as f:
                self.wfile.write(bytes(json.dumps(json.load(f)), 'utf8'))
        else:
            self.send_response(404)

with socketserver.TCPServer(("", 3000), Handler) as httpd:
    print("Serving at port", 3000)
    httpd.serve_forever()