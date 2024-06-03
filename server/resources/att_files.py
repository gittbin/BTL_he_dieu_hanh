import subprocess
import os
def set_file_attributes(path, attributes):
    """
    Set file or folder attributes using the 'attrib' command.
    :param path: Path to the file or folder
    :param attributes: String of attributes to set (e.g., '+R +H' to set Read-only and Hidden)
    """
    print(path)
    if not os.path.exists(path):
        print(f"Directory {path} does not exist.")
        return {"announc":0,
                "infor":f"{path} doesn't exist"       
        }
    try:
        command = f'attrib {attributes} "{path}"'
        subprocess.check_call(command, shell=True)
        print(f"Changed attributes for {path} to {attributes}")
        return {"announc":1,
                "infor":f"Changed attributes for {path} to {attributes}"
            
        }
    except subprocess.CalledProcessError as e:
        print(f"Failed to change attributes for {path}: {e}")
        return {"announc":0,
                "infor":f"Failed to change attributes for {path}: {e}"       
        }
def get_file_attributes(path):
    """
    Get the attributes of a file or folder using the 'attrib' command.
    :param path: Path to the file or folder
    """
    if not os.path.exists(path):
        print(f"Directory {path} does not exist.")
        return {"announc":0,
                "infor":f"{path} doesn't exist"       
        }
    try:
        result = subprocess.check_output(['attrib', path]).decode()
        print(f"Attributes for {path}:\n{result}")
        return {"announc":1,
                "infor":f"Attributes for {path}:\n{result}"
            
        }
    except subprocess.CalledProcessError as e:
        print(f"Failed to get attributes for {path}: {e}")
        return {"announc":0,
                "infor":f"Failed to get attributes for {path}: {e}"
            
        }

# Ví dụ sử dụng
# path = r'F:\destination'

# # Đọc thuộc tính hiện tại
# get_file_attributes(path)

# # Đặt thuộc tính: Read-only và Hidden
# set_file_attributes(path, '+R +H')

# # Đọc lại thuộc tính sau khi thay đổi
# get_file_attributes(path)

# # Bỏ thuộc tính: Read-only và Hidden
# set_file_attributes(path, '-R -H')

# # Đọc lại thuộc tính để xác nhận thay đổi
# get_file_attributes(path)
