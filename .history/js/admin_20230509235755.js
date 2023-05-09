
function  activeSidebar() {
    $("#open-sidebar").prop("checked", true);
    $(".sidebar").removeClass("toggled");
    $(".page-content").removeClass("toggled");
}
function  disactiveSidebar() {
    $("#open-sidebar").prop("checked", false);
    $(".sidebar").addClass("toggled");
    $(".page-content").addClass("toggled");
}
$(document).ready(function () {
    // check local storage for theme setting
    if (localStorage.getItem("theme"))
    {
        $("body").addClass(localStorage.getItem("theme"));
        $("#"+localStorage.getItem("theme")).prop("checked", true);
    }
    else
    {
        var v="stander";
        $("#"+v).prop("checked", true);
        $("body").addClass(v);
        localStorage.setItem("theme", v);
    }
    //sidebar show
    if (localStorage.getItem("sidebar"))
    {
        if(1==localStorage.getItem("sidebar"))
            activeSidebar();
        else
            disactiveSidebar();
    }
    else
    {
        activeSidebar();
        localStorage.setItem("sidebar", 1);
    }
    
});
// toggle theme when button is clicked
$(".toggle-theme").change(function () {
    
    if ($(this).is(":checked")) 
    {
        $(".toggle-theme").prop("checked", false)
        var v=$(this).val();
        $("#"+v).prop("checked", true);
    }
    else
    {
        var v="stander";
        $("#"+v).prop("checked", true);
    }
    $("body").removeClass().addClass(v);
    localStorage.setItem("theme", v);
});
//Toggle Sidebar open or close setting
$("#open-sidebar").change(function () {
    
    if ($(this).is(":checked")) 
    {
        activeSidebar();
        localStorage.setItem("sidebar", 1);
    }
    else
    {
        disactiveSidebar();
        localStorage.setItem("sidebar", 0);
    }
});
//Sidebar Sub slink
$('.sidebar-item').click(function () {
    $(this).toggleClass('slided');
    $(this).find("ul.sidebar-dropdown").slideToggle("open").siblings().removeClass('open');
});

//open and close sidebar
$(document).on("click toch", ".menu-btn", function () {
    // $(this).toggleClass("open");
    $(".sidebar").toggleClass("toggled");
    //    
    $(".page-content").toggleClass("toggled");
    //
    $(".page-content").toggleClass("toggled");
    ds-container
});
$(document).on("click toch", ".dropdown", function () {
    $(this).find("ul.dropdown-menu").slideToggle("open").siblings().removeClass('open');
});
//Right Sidebar Setting
$(document).on("click toch", ".setting-btn , .setting-close-btn", function () {
    $(".end-bar").toggleClass("end-bar-enabled");
});
$(document).on("click toch", "#resetBtn", function () {
    localStorage.clear();
    location.reload();
});
//Notification
function toastNotif(setting){
	let notifs = document.getElementById("toasts");
	let toast = document.createElement("div");
	toast.style.backgroundColor = setting.color;
	toast.classList.add('toast', 'toast-show');
	icon = document.createElement("i");
	icon.classList.add('icon-'+setting.icon);

	let text = document.createElement("p");
	text.appendChild( document.createTextNode(setting.text) );

	toast.appendChild(icon);
	toast.appendChild(text);
	notifs.appendChild(toast);

	setTimeout(() => {
		toast.classList.remove('toast-show')
		toast.classList.add('toast-hide')
		setTimeout(() => {
			toast.remove()
		}, 300)
	}, setting.timeout);
}
//
function MsgSuccess(txt) {
	toastNotif({
		text: txt,
		color: '#2AA876',
		timeout: 5000,
		icon: 'checkmark'
	});
}
function MsgWarring(txt) {
	toastNotif({
		text: txt,
		color: '#ffc107',
		timeout: 5000,
		icon: 'warning'
	});
}
function MsgError(txt) {
	toastNotif({
		text: txt,
		color: '#dc3545',
		timeout: 5000,
		icon: 'notification'
	});
}
//
