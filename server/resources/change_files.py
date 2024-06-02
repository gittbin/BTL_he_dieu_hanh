import os

def rename_files_by_extension(directory, old_extension, new_extension):
    # Lặp qua các tệp trong thư mục
    for filename in os.listdir(directory):
        # Kiểm tra xem tệp có kết thúc bằng tiền tố cũ không
        if filename.endswith(old_extension):
            # Tạo tên mới bằng cách thay thế tiền tố cũ bằng tiền tố mới
            new_filename = filename.replace(old_extension, new_extension)
            # Đổi tên tệp
            os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
    return 1