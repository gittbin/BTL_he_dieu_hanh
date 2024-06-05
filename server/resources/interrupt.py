import os
import signal
import psutil
def terminate_process(name):
    a=[]
    try:
        for proc in psutil.process_iter(attrs=['pid', 'name']): 
            if proc.info['name']==name:
                a.append(f"Process {proc.info['pid']} has been terminated.")
                os.kill(proc.info['pid'], signal.SIGTERM)
                
        print(a)
        return{"announc":0,
        "infor":a     
        }
    except OSError as e:
        print(f"Error: {e}")
        return {"announc":0,
        "infor":f"Error: {e}"    
        }




