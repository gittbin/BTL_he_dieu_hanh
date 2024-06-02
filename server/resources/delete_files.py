import os

def delete_files_by_extension(directory, extension):
    if extension=='all':
        print(1)
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    os.remove(file_path)
                    print(f"Đã xóa {file_path}")
                return 1
        except Exception as e:
            print(f"Lỗi khi xóa tệp tin: {e}")
            return 0
    else:
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    print(file.lower())
                    if file.lower().endswith(extension.lower()):
                        file_path = os.path.join(root, file)
                        os.remove(file_path)
                        print(f"Đã xóa {file_path}")
                return 1
        except Exception as e:
            print(f"Lỗi khi xóa tệp tin: {e}")
            return 0
