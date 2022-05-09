let count = 0;

function deleteButton () {
    localStorage.removeItem(count.toString());
    $(this).closet().remove();
}



$('form').on('submit', (e) =>
 {
     count++;
     const TEXT =$('form').find('input').val();
     localStorage.setItem('count', count);
     localStorage.setItem(`${count}`, TEXT);
     let savedText = localStorage.getItem(`${count}`);
     let $list = $(`<div>${savedText}<div>`);
     $list.addClass(`${count}`);
     $(`.${count}`).css('opacity', 1);
     let $button = $(`<button class = "delete">delete</button>`);
     $('.to-do-list').append($list);
     $(`.${count}`).append($button);
     $('.text').val('');
     e.preventDefault();
}
 );

$('.delete').on('click', deleteButton);

 function allStorage() {

    const items = { ...localStorage };
    let COUNT = Object.keys(items).filter(function(i){return i.indexOf("count") > -1;});
    keys = Object.keys(items);
    i=keys.length;
     while ( i-- > 1 ) {
         text = localStorage.getItem(keys[keys.length - i - 1]);
         console.log(keys.length-i);
         console.log(keys[keys.length - i]);
         let $list = $(`<div>${text}<div>`);
         $list.addClass(`${keys[keys.length - i - 1]}`);
         let $button = $(`<button class = "delete">delete</button>`);
         $('.to-do-list').append($list);
         $(`.${keys[keys.length - i - 1]}`).append($button);
         count = localStorage.getItem('count');
    }
    console.log(items);
    console.log(COUNT);
}

 $(document).ready(allStorage);
 $(document).ready(function () {
     $('body').css('opacity', 1);
 });

