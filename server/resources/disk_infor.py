import psutil

def get_disk_info():
    
    data={}
    partitions = psutil.disk_partitions()
    for partition in partitions:
        try:
            usage = psutil.disk_usage(partition.mountpoint)
            total_size = usage.total // (1024 ** 2)  # Chuyển từ byte sang gigabyte
            used_size = usage.used // (1024 ** 2)
            free_size = usage.free // (1024 ** 2)
            
            data[partition.device]={
                "  - Dung lượng tổng cộng:":str(total_size)+' MB',
                "  - Dung lượng đã sử dụng:":str(used_size)+' MB',
                "  - Dung lượng còn trống:":str(free_size)+' MB'
            }
            
        except Exception as e:
            print(f"Lỗi khi truy vấn thông tin ổ đĩa: {e}")
    print(data)
    return(data)
if __name__ == "__main__":
    get_disk_info()
