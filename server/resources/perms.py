import os
import stat
import subprocess
from PIL import Image
# Hàm để đọc quyền truy cập của tệp/thư mục
def read_permissions_windows(path):
    try:
        result = subprocess.check_output(['icacls', path]).decode()
        print(f"Permissions for {path}:\n{result}")
        data={"announc":1,
              "infor":f"Permissions for {path}:\n{result}"}
        return data
                
    except subprocess.CalledProcessError as e:
        print(f"Failed to read permissions for {path}: {e}")
        data={"announc":0,
              "infor":f"Failed to read permissions for {path}: {e}"}
        return data
# Hàm để thay đổi quyền truy cập của tệp/thư mục
def change_permissions_windows(path, permissions):
    try:
        # Trước tiên, xóa quyền của Everyone
        subprocess.check_call(['icacls', path, '/remove', 'Everyone'])
        # Sau đó thêm quyền mới
        subprocess.check_call(['icacls', path, '/grant', permissions])
        print(f"Changed permissions for {path} to {permissions}")
        return {"announc":1,
                "infor":f"Changed permissions for {path} to {permissions}"

        }
    except subprocess.CalledProcessError as e:
        print(f"Failed to change permissions for {path}: {e}")
        return{"announc":0,
                "infor":f"Failed to change permissions for {path}: {e}"

        }

# Hàm để thay đổi thuộc tính của tệp/thư mục (ví dụ: đặt thành chỉ đọc)
# read_permissions_windows(r'F:\destination')
# change_permissions_windows(r'F:\destination','Everyone:F')
# read_permissions_windows(r'F:\destination')
