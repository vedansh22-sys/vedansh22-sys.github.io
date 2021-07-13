/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/

function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    while(p<=mid && q<=end)
    {
        if(div_sizes[p]<div_sizes[q])
        {
            Arr[k]=div_sizes[p];
            div_update(divs[p],div_sizes[p],"red");//Color update
            p++;
            k++;
        }
        else
        {
            Arr[k]=div_sizes[q];
            div_update(divs[q],div_sizes[q],"red");//Color update
            q++;
            k++;
        }
    }

    while(p<=mid)
    {
        Arr[k]=div_sizes[p];
        div_update(divs[p],div_sizes[p],"red");//Color update
        p++;
        k++;
    }

     while(q<=end)
    {
        Arr[k]=div_sizes[q];
        div_update(divs[q],div_sizes[q],"red");//Color update
        q++;
        k++;
    }

    // for(var i=start; i<=end; i++)
    // {
    //     if(p>mid)
    //     {
    //         Arr[k++]=div_sizes[q++];
    //         div_update(divs[q-1],div_sizes[q-1],"red");//Color update
    //     }
    //     else if(q>end)
    //     {
    //         Arr[k++]=div_sizes[p++];
    //         div_update(divs[p-1],div_sizes[p-1],"red");//Color update
    //     }
    //     else if(div_sizes[p]<div_sizes[q])
    //     {
    //         Arr[k++]=div_sizes[p++];
    //         div_update(divs[p-1],div_sizes[p-1],"red");//Color update
    //     }
    //     else
    //     {
    //         Arr[k++]=div_sizes[q++];
    //         div_update(divs[q-1],div_sizes[q-1],"red");//Color update
    //     }
    // }

    for(var t=0,i=start;i<=end;t++,i++)
    {
        div_sizes[i]=Arr[t];
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/