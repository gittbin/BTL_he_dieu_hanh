from flask import Flask, request, jsonify
from resources import cpu_get_infor,Ram,disk_infor,copy_files,delete_files,mouse as mouses,change_files,perms,att_files
app = Flask(__name__)
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response
@app.after_request
def after_request(response):
    response = add_cors_headers(response)
    return response
@app.route('/CPU', methods=['GET'])
def CPU():
    data=cpu_get_infor.get_cpu_info()
    return jsonify({'result':data} )
@app.route('/ram', methods=['GET'])
def ram():
    data=Ram.get_ram_info()
    return jsonify({'result':data} )
@app.route('/disk', methods=['GET'])
def system():
    data=disk_infor.get_disk_info()
    return jsonify({'result':data} )
@app.route('/copy', methods=['GET'])
def copy():
    source = request.args.get('source')
    dest=request.args.get('dest')
    extension=request.args.get('extension')
    data=copy_files.copy_files(source,dest,extension)
    return jsonify({'result':data} )
@app.route('/delete', methods=['GET'])
def delete():
    source = request.args.get('source')
    type=request.args.get('type')
    data=delete_files.delete_files_by_extension(source,type)
    return jsonify({'result':data} )
@app.route('/mouse', methods=['GET'])
def mouse():
    x=request.args.get('x')
    y=request.args.get('y')
    data=mouses.cotroller_mouse(x,y)
    return jsonify({'result':data} )
@app.route('/change', methods=['GET'])
def change():
    x=request.args.get('x')
    y=request.args.get('y')
    z=request.args.get('z')
    data=change_files.rename_files_by_extension(x,y,z)
    return jsonify({'result':data} )
@app.route('/r_perms', methods=['GET'])
def r_perms():
    x=request.args.get('x')
    data=perms.read_permissions_windows(x)
    return jsonify({'result':data} )
@app.route('/c_perms', methods=['GET'])
def c_perms():
    x=request.args.get('x')
    y=request.args.get('y')
    data=perms.change_permissions_windows(x,y)
    return jsonify({'result':data} )
@app.route('/r_att', methods=['GET'])
def r_att():
    x=request.args.get('x')
    data=att_files.get_file_attributes(x)
    return jsonify({'result':data} )
@app.route('/c_att', methods=['GET'])
def c_att():
    x=request.args.get('x')
    y=request.args.get('y')
    data=att_files.set_file_attributes(x,y)
    return jsonify({'result':data} )
if __name__ == '__main__':
    app.run(debug=True, port=8000)
    print('Server end') 
