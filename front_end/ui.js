$=document.querySelector.bind(document)
$$=document.querySelectorAll.bind(document)
fors=$$('.for')
icon=$$('.icon')
common=$$('.common')
infor=$('.infor')
type=$('.type')
for_device=$('.for_device')
for_file=$('.for_file')
for_copy=$('.for_copy')
for_delete=$('.for_delete')
for_mouse=$('.for_mouse')
for_change=$('.for_change')
for_r_perms=$('.for_r_perms')
for_c_perms=$('.for_c_perms')
for_r_att=$('.for_r_att')
for_c_att=$('.for_c_att')
Selections=$$('.Selection')
container=$('.container')
cpu=$('.cpu')
ram=$('.ram')
disk=$('.disk')
copy=$('.copy')
r_perms=$('.r_perms')
c_perms=$('.c_perms')
deletes=$('.deletes')
start=$('.start')
destination=$('.destination')
commit=$('.commit')
input=$('#input')
input_change=$('#input_change')
output_change=$('#output_change')
output2_change=$('#output2_change')
input_r_perms=$('#input_r_perms')
input_c_perms=$('#input_c_perms')
output_c_perms=$('#output_c_perms')
input_r_att=$('#input_r_att')
input_c_att=$('#input_c_att')
output_c_att=$('#output_c_att')
input2=$('#input2')
output2=$('#output2')
output=$('#output')
output3=$('#output3')
change=$('.change')
announc=$('.announc')
loading=$('.loading')
input_mouse=$('#input_mouse')
output_mouse=$('#output_mouse')
loading.style.display="none"
cover=$('.cover')
mouse=$('.mouse')
r_att=$('.r_att')
c_att=$('.c_att')
icon.forEach(element => {
    element.onclick=() =>{    
       Selections=element.parentNode.querySelector('.selection')
       console.log(Selections.style.height=='')
       if(Selections.style.height==''){ selection=Selections.querySelectorAll('.selection_item')
      console.log(80*selection.length)
    Selections.style.height=`${100*selection.length}px`
       }else{
        Selections.style.height=''
       }
     
       o=element.querySelector('.o')
       if(o.style.transform==''){
        o.style.transform='rotate(180deg)'
       }else{
        o.style.transform=''
       }
       
       
    }

});
change_loading=function(a){
    if(a==1){loading.style.display="block"}
    else{ loading.style.display="none"  }
}
cpu.onclick=()=>{
  for_file.style.display="none"
  for_device.style.display="flex"
    // loading.style.display="none"
    for_device.innerHTML='';
    change_loading(1)
    fetch('http://127.0.0.1:8000/CPU', {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        response=response.result
        console.log(response[" mã dòng"])
        available=
        `<div>
        <h1>mã dòng : ${response[" mã dòng"]}</h1>
        <h1>phiên bản CPU : ${response['CPU']}</h1>
        <h1>bước tiến : ${response["bước tiến"]}</h1>
        <h1>phiên bản : ${response["phiên bản"]}</h1>
        <h1>số lõi : ${response["số lõi"]}</h1>
        <h1>xung nhịp : ${response["xung nhịp"]}</h1>
        `
        change_loading(0)
        for_device.innerHTML=available
        console.log(infor)
      })
      .catch(error => console.error('Error: ', error));
}  
ram.onclick=()=>{
  for_file.style.display="none"
  for_device.style.display="flex"
    // loading.style.display="none"
    for_device.innerHTML='';
    change_loading(1)
    fetch('http://127.0.0.1:8000/ram', {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        response=response.result
        available=
        `<div>
        <h1>Dung lượng RAM khả dụng : ${response["Dung lượng RAM khả dụng"]}</h1>
        <h1>Dung lượng RAM tổng cộng : ${response["Dung lượng RAM tổng cộng"]}</h1>
        `
        change_loading(0)
        for_device.innerHTML=available
        console.log(infor)
      })
      .catch(error => console.error('Error: ', error));
}  
disk.onclick=()=>{
  for_file.style.display="none"
  for_device.style.display="flex"
    // loading.style.display="none"
    for_device.innerHTML='';
    change_loading(1)
    fetch('http://127.0.0.1:8000/disk', {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        response=response.result
        console.log(response)
        a=response["C:\\"]
        b=response["E:\\"]
        c=response["F:\\"]
        available=
        `<div>
        <h1 style="color:greenyellow">C:\\<h1>
        <h1>Dung lượng còn trống: : ${a["  - Dung lượng còn trống:"]}</h1>
        <h1>Dung lượng tổng cộng : ${a["  - Dung lượng tổng cộng:"]}</h1>
        <h1>Dung lượng đã dùng : ${a["  - Dung lượng đã sử dụng:"]}</h1>
        <h1 style="color:greenyellow">D:\\<h1>
        <h1>Dung lượng còn trống: : ${b["  - Dung lượng còn trống:"]}</h1>
        <h1>Dung lượng tổng cộng : ${b["  - Dung lượng tổng cộng:"]}</h1>
        <h1>Dung lượng đã dùng : ${b["  - Dung lượng đã sử dụng:"]}</h1>
        <h1 style="color:greenyellow">F:\\<h1>
        <h1>Dung lượng còn trống: : ${c["  - Dung lượng còn trống:"]}</h1>
        <h1>Dung lượng tổng cộng : ${c["  - Dung lượng tổng cộng:"]}</h1>
        <h1>Dung lượng đã dùng : ${c["  - Dung lượng đã sử dụng:"]}</h1>
        `
        change_loading(0)
        for_device.innerHTML=available
        console.log(infor)
      })
      .catch(error => console.error('Error: ', error));
}  
mouse.onclick=()=>{

}
copy.onclick = () =>{ change_loading(0)
    for_file.style.display="flex"
  for_device.style.display="none"    
  fors.forEach(element=>{
    element.style.display="none"
  })
  for_copy.style.display="flex"
  // for_delete.style.display="none"

  // for_mouse.style.display="none"
  // for_change.style.display="none"
  // for_r_perms.style.display="none"
}
deletes.onclick=()=>{ change_loading(0)
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
  for_delete.style.display="flex"
  // for_copy.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
  // for_change.style.display="none"
  // for_r_perms.style.display="none"
}
mouse.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
    for_mouse.style.display="flex"
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"

  // for_change.style.display="none"
  // for_r_perms.style.display="none"
}
change.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  })  
  for_change.style.display="flex"
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
 
  // for_r_perms.style.display="none"
}
r_perms.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
  // for_change.style.display="none"
  for_r_perms.style.display="flex"

}
c_perms.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
  // for_change.style.display="none"
  for_c_perms.style.display="flex"
}
r_att.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
  // for_change.style.display="none"
  for_r_att.style.display="flex"
}
c_att.onclick=()=>{
  for_file.style.display="flex"
  for_device.style.display="none" 
  fors.forEach(element=>{
    element.style.display="none"
  }) 
  // for_copy.style.display="none"
  // for_delete.style.display="none"
  // for_device.style.display="none"
  // for_mouse.style.display="none"
  // for_change.style.display="none"
  for_c_att.style.display="flex"
}
common.forEach(element=>{
  element.onclick=()=>{ 
  d=element.parentNode.querySelector('.confirm')
d.innerHTML=''}
element.oninput=()=>{
  d=element.parentNode.querySelector('.confirm')
  d.innerHTML=''
}
})
function announcement(a,b,c=''){b.querySelector('.announc').style.display="flex"
  if(c==''){
if(a==1){
  b.querySelector('.announc').innerHTML=`<lord-icon
  src="https://cdn.lordicon.com/oqdmuxru.json"
  trigger="loop"
  colors="primary:#30e849"
  delay="100"
  style="width:100px;height:100px">
</lord-icon>
<div class="text" style="color:#30e849;margin-top: 10px;font-size: 50px;">Thành công</div>`
}else{
  b.querySelector('.announc').innerHTML=`<lord-icon
  src="https://cdn.lordicon.com/nqtddedc.json"
  trigger="loop"
  delay="100"
  colors="primary:#e83a30"
  style="width:100px;height:100px">
</lord-icon>
<div class="text" style="color:#e83a30;margin-top: 10px;font-size: 50px;">Lỗi</div>`
}
// setTimeout(()=>{
//   b.querySelector('.announc').style.display="none"
//   b.querySelector('.announc').innerHTML=''
// },3000)
  }else{
    if(a==1){
      b.querySelector('.announc').innerHTML=`<lord-icon
      src="https://cdn.lordicon.com/oqdmuxru.json"
      trigger="loop"
      colors="primary:#30e849"
      delay="100"
      style="width:100px;height:100px">
    </lord-icon>
    <div class="text" style="color:#30e849;margin-top: 10px;font-size: 20px;">${c}</div>`
    }else{
      b.querySelector('.announc').innerHTML=`<lord-icon
      src="https://cdn.lordicon.com/nqtddedc.json"
      trigger="loop"
      delay="100"
      colors="primary:#e83a30"
      style="width:100px;height:100px">
    </lord-icon>
    <div class="text" style="color:#e83a30;margin-top: 10px;font-size: 20px;">${c}</div>`
    
    }
  }
  // setTimeout(()=>{
  //   b.querySelector('.announc').style.display="none"
  //   b.querySelector('.announc').innerHTML=''
  // },3000)
  b.querySelector('.announc').onclick=()=>{
    b.querySelector('.announc').style.display="none"
  }
}
for_copy.querySelector('.commit').onclick=()=>{
  check=1;
  for_copy.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      console.log(input.value,output.value)
      var params = new URLSearchParams();
      params.append('source',input.value);
      params.append('dest',output.value);
      params.append('extension',output3.value);
      console.log('http://127.0.0.1:8000/copy?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/copy?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result==1){
announcement(1,for_copy)

        }else{
          announcement(0,for_copy)
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_delete.querySelector('.commit').onclick=()=>{
  check=1;
  for_delete.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('source',input2.value);
      params.append('type',output2.value);
      console.log('http://127.0.0.1:8000/delete?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/delete?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result==1){
announcement(1,for_delete)

        }else{
          announcement(0,for_delete)
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_mouse.querySelector('.commit').onclick=()=>{
  check=1;
  for_mouse.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_mouse.value);
      params.append('y',output_mouse.value);
      console.log('http://127.0.0.1:8000/mouse?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/mouse?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result==1){
announcement(1,for_mouse)

        }else{
          announcement(0,for_mouse)
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_change.querySelector('.commit').onclick=()=>{
  check=1;
  for_change.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_change.value);
      params.append('y','.'+output_change.value);
      params.append('z','.'+output2_change.value);
      console.log('http://127.0.0.1:8000/change?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/change?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result==1){
announcement(1,for_change)

        }else{
          announcement(0,for_change)
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_r_perms.querySelector('.commit').onclick=()=>{
  check=1;
  for_r_perms.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_r_perms.value);
      console.log('http://127.0.0.1:8000/r_perms?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/r_perms?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result["announc"]==1){
announcement(1,for_r_perms,response.result["infor"])

        }else{
announcement(0,for_r_perms,response.result["infor"])
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_c_perms.querySelector('.commit').onclick=()=>{
  check=1;
  for_c_perms.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_c_perms.value)
      params.append('y',output_c_perms.value);
      console.log('http://127.0.0.1:8000/c_perms?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/c_perms?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result["announc"]==1){
announcement(1,for_c_perms,response.result["infor"])

        }else{
announcement(0,for_c_perms,response.result["infor"])
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_r_att.querySelector('.commit').onclick=()=>{
  check=1;
  for_r_att.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_r_att.value);
      console.log('http://127.0.0.1:8000/r_att?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/r_att?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result["announc"]==1){
announcement(1,for_r_att,response.result["infor"])

        }else{
announcement(0,for_r_att,response.result["infor"])
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}
for_c_att.querySelector('.commit').onclick=()=>{
  check=1;
  for_c_att.querySelectorAll('.button').forEach(element=>{
    x=element.querySelector('.confirm')
    if(x!=null){
      if(element.querySelector('.common').value==''){
      x.style.color='red';
      x.innerHTML='vui lòng nhập'
      check=0;
    
      }
    
    }
    
    })
    if(check){
      var params = new URLSearchParams();
      params.append('x',input_r_att.value)
      params.append('y',output_c_att.value);
      console.log('http://127.0.0.1:8000/c_att?'+params.toString())
      change_loading(1)
      fetch('http://127.0.0.1:8000/c_att?'+params.toString(), {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        
      })
      .then(res => res.json())
      .then(response => {
        change_loading(0)
        if(response.result["announc"]==1){
announcement(1,for_c_att,response.result["infor"])

        }else{
announcement(0,for_c_att,response.result["infor"])
        }
      })
      .catch(error => console.error('Error: ', error));
    }
}