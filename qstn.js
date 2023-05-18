let i,j,n=5;
for(i=0;i<n;i++){
    for(j=n;j>i;j--) process.stdout.write(" ")
    process.stdout.write("*")
    for(j=0;j<(2*i-1);j++) process.stdout.write("_")
    if(i!==0) console.log("*")
    else console.log()
}