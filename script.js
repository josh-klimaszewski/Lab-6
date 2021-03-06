$(function () {
    var $table = $('.table');
    var $saveButton = $('.save');
    var $xout = $('.xout');
    var $form = $('form');
    var $this;
    var $thisNumber;
    var $tableName;
    var $tablePhone;
    var $tableSize;
    var info1;
    var info2;
    var info3;
    var infoBox;

    $form.hide();

    $table.click(function () {
        $this = $(this);
        $thisNumber = $this.text();
        $('form p').text('Table Number: ' + $thisNumber);
        $form.slideDown(400);
    })
    $xout.click(function () {
        $form.slideUp(400);
    })

    $saveButton.click(function () {
        $tableName = $('#name').val();
        $tableSize = $('#size').val();
        $tablePhone = $('#phone').val();
        if ($tableName) {
            if ($tablePhone) {
                if ($tableSize) {
                    addHoverData();
                    $this.removeClass('available');
                    $this.addClass('reserved');
                    $form.slideUp(400);
                    $('#name').val("");
                    $('#size').val("");
                    $("#phone").val("");
                } else {
                    alert("Please enter a table size!");
                }
            } else {
                alert("Please enter a phone number!");
            }
        } else {
            alert("Please enter a name!");
        }
    });
    function addHoverData() {
        info1 = $('<p>');
        info2 = $('<p>');
        info3 = $('<p>');
        infoBox = $('<div>');
        infoBox.addClass('info');
        info1.text("Name: " + $tableName);
        info2.text("Phone Number: " + $tablePhone);
        info3.text("Table Size: " + $tableSize);
        infoBox.append(info1);
        infoBox.append(info2);
        infoBox.append(info3);
        $this.append(infoBox);
    }
});