/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/

function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    if(start==end)
    {
        div_update(divs[start],div_sizes[start],"green");
        return start;
    }
    
    var pindex = start;
    var pivot = div_sizes[end] ;//make the last element as pivot element.
    div_update(divs[end],div_sizes[end],"yellow");//Color update

        for(var i =start; i < end ; i++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater  on the other side.
            if (div_sizes[ i ] <= pivot)
            {
                div_update(divs[i],div_sizes[i],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[pindex],div_sizes[pindex],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[pindex];
                div_sizes[pindex]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[pindex],div_sizes[pindex],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Colour update
                div_update(divs[pindex],div_sizes[pindex],"blue");//Colour update

                pindex += 1;
            }
    }
    div_update(divs[end],div_sizes[end],"red");//Color update
    div_update(divs[pindex],div_sizes[pindex],"red");//Color update
    
    var temp=div_sizes[end];//put the pivot element in its proper place.
    div_sizes[end]=div_sizes[pindex];
    div_sizes[pindex]=temp;

    div_update(divs[end],div_sizes[end],"red");//Height update
    div_update(divs[pindex],div_sizes[pindex],"red");//Height update

    div_update(divs[end],div_sizes[end],"blue");//Colour update
    div_update(divs[pindex],div_sizes[pindex],"blue");//Colour update

    div_update(divs[pindex],div_sizes[pindex],"green");

    // for(var t=start;t<=i;t++)
    // {
    //     div_update(divs[t],div_sizes[t],"green");//Color update
    // }

    return pindex;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start <= end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/