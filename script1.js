let arr=[
    {num:12, fac:[]},
    {num:24, fac:[]},
    {num:55, fac:[]},
    {num:21, fac:[]},
    {num:37, fac:[]}
];

for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr[i].num;j++){
    if(arr[i].num%j==0)
    arr[i].fac.push(j);
  }
}


console.log(arr);