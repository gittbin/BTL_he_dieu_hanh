from pynput.mouse import Button, Controller


def cotroller_mouse(x, y):
    mouse = Controller()
    # Di chuyển chuột tới vị trí (100, 100)
    mouse.position = (x, y)
    print(f"Mouse moved to {mouse.position}")
    return 1
