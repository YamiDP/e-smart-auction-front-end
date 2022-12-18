$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$(function () {
    $(".file-input-preview").change(function (e) {
        e.preventDefault();

        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .find(".file_name")
            .val($(this)[0].files[0].name);
    });

    $("#custom-file-input").on("change", function () {
        const form = new FormData();
        //Lấy file image từ html
        form.append("file", $(this)[0].files[0]);

        const type = $(this).parent().parent().find("#image_type").val();
        form.append("type", type);

        const imageShow = $(this).parent().parent().find("#image_show");

        const image = $(this).next();

        $.ajax({
            processData: false,
            contentType: false,
            type: "POST",
            url: "/admin/ajax/upload-company-file",
            data: form,
            dataType: "JSON",
            success: function (response) {
                if (response.isSuccess) {
                    $(imageShow).html(
                        '<a href="' +
                            response.url +
                            '" target="_blank"><img src="' +
                            response.url +
                            '" width="35%" height="300px""></a>'
                    );

                    $(image).val(response.storedName);

                    if (type == "page_image") {
                        $("input[name=url]").val(response.url);
                    }
                } else {
                    alert("Upload file lỗi");
                }
            },
        });
    });

    //Thay đổi province
    $("#province").change(function (e) {
        e.preventDefault();

        var province_id = $(this).val();

        $.ajax({
            type: "POST",
            url: "/admin/ajax/address/districts",
            data: { province_id: province_id },
            dataType: "JSON",
        }).done(function (data) {
            //   alert(data.districts);
            updateSelectBox(data.districts, "#district");
        });

        $("#district").change(function (e) {
            e.preventDefault();
            var district_id = $(this).val();

            $.ajax({
                type: "POST",
                url: "/admin/ajax/address/wards",
                data: { district_id: district_id },
                dataType: "JSON",
            }).done(function (data) {
                //   alert(data.districts);
                updateSelectBox(data.wards, "#ward");
            });
        });
    });

    var modal = document.querySelector("#modal_theme_danger");

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    $("button.destroy").click(function (e) {
        e.preventDefault();
        $(modal).show();

        var dataUrl = $(this).attr("data-url");

        $("#modal_theme_danger .modal-footer form").attr("action", dataUrl);
    });

    $("#modal_theme_danger tbody").on("click", "button.destroy", function (e) {
        e.preventDefault();
        $(modal).show();

        var dataUrl = $(this).attr("data-url");

        $(".swal2-fade form").attr("action", dataUrl);
    });

    $(".btn-close").click(function (e) {
        e.preventDefault();

        $(modal).hide();
    });

    $(".btn-footer-close").click(function (e) {
        e.preventDefault();

        $(modal).hide();
    });

    // $("#modal_theme_danger").click(function (e) {
    //     e.preventDefault();

    //     $(modal).hide();
    // });
});

// Cập nhật các option cho thẻ select
function updateSelectBox(data, selector, selected_id = null) {
    var items = data; //decode (giải mã)

    $(selector).find("option").not(":first").remove(); //delete all old option tag
    if (!data) return;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        selected = "";
        if (selected_id == item.id) {
            //tag is choosen
            selected = "selected";
        }
        let option =
            "<option " +
            selected +
            ' value="' +
            item.id +
            '"> ' +
            item.name +
            "</option>";
        $(selector).append(option); //add to new tag
    }
}
