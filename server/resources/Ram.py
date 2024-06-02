import psutil

def get_ram_info():
    ram = psutil.virtual_memory()
    total_ram = ram.total // (1024 ** 2)  # Chuyển từ byte sang megabyte
    available_ram = ram.available // (1024 ** 2)
    data={
        "Dung lượng RAM tổng cộng": str(total_ram)+"MB",
        "Dung lượng RAM khả dụng":str(available_ram)+"MB"
    }
    print(data)
    return(data)

