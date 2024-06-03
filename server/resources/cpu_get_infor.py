import os
import platform

def get_cpu_info():
    if platform.system() == "Windows":
        try:
            result = os.popen("wmic cpu get caption, maxclockspeed, numberofcores").read()
            print(result)
            lines = result.split("\n")
            print(lines)
            for line in lines[1:]:
                print(line)
                if line.strip():
                    parts = line.split()
                    cpu_name = parts[0]
                    ma_dong = parts[1]+" "+parts[2]
                    version = parts[3]+" "+parts[4]
                    step=parts[5]+" "+parts[6]
                    speed_cpu=parts[7]
                    lõi=parts[8]
                    data={
                        "CPU": cpu_name,
                        " mã dòng" : ma_dong,
                        "phiên bản" : version,
                        "bước tiến":step,
                        "xung nhịp":speed_cpu,
                        "số lõi":lõi}
                    print(data)
                    return data
        except Exception as e:
            print(f"Lỗi khi truy vấn thông tin CPU: {e}")
    else:
        print("Hệ thống không phải là Windows. Không thể lấy thông tin CPU.")


get_cpu_info()