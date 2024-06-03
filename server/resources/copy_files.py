import os
import shutil

def copy_files(source_dir, dest_dir,extension=''):
    check=0
    if extension=='all':
        try:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    check=1
                    src_path = os.path.join(root, file)
                    dest_path = os.path.join(dest_dir, os.path.relpath(src_path, source_dir))
                    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                    shutil.copy(src_path, dest_path)
            if check==0:
                return 0
            return 1
        except Exception as e:
            print(f"Lỗi khi sao chép tệp tin: {e}")
            return 0
    else:
        try:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    check=1
                    if file.lower().endswith(extension.lower()):
                        src_path = os.path.join(root, file)
                        dest_path = os.path.join(dest_dir, os.path.relpath(src_path, source_dir))
                        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                        shutil.copy(src_path, dest_dir)
            if check==0:
                return 0
            return 1
        except Exception as e:
            print(f"Lỗi khi sao chép tệp tin: {e}")
            return 0

