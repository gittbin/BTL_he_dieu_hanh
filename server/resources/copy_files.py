import os
import shutil

def copy_files(source_dir, dest_dir,extension=''):
    if extension=='all':
        try:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    src_path = os.path.join(root, file)
                    dest_path = os.path.join(dest_dir, os.path.relpath(src_path, source_dir))
                    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                    shutil.copy(src_path, dest_path)
            return 1
        except Exception as e:
            print(f"Lỗi khi sao chép tệp tin: {e}")
            return 0
    else:
        try:
            for root, dirs, files in os.walk(source_dir):
                for file in files:
                    if file.lower().endswith(extension.lower()):
                        src_path = os.path.join(root, file)
                        dest_path = os.path.join(dest_dir, os.path.relpath(src_path, source_dir))
                        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                        shutil.copy(src_path, dest_dir)
            return 1
        except Exception as e:
            print(f"Lỗi khi sao chép tệp tin: {e}")
            return 0

