import os
import signal
import time

# Ví dụ PID của tiến trình bạn muốn điều khiển
pid = 12345  # Thay thế bằng PID thực tế

# Tạm dừng tiến trình bằng SIGTSTP
os.kill(pid, signal.SIGTSTP)
print(f"Process {pid} has been paused with SIGTSTP.")

# Chờ một lúc trước khi tiếp tục
time.sleep(5)

# Tiếp tục tiến trình bằng SIGCONT
os.kill(pid, signal.SIGCONT)
print(f"Process {pid} has been resumed with SIGCONT.")
