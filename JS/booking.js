
(function(k,o,t,e,l){
    l = document.createElement("script");
    l.type = "text/javascript";
    l.src = "https://bookonline24.ru/widget.js";
    l.async = !0;
    l.onload = l.onreadystatechange = function() {
        e = this.readyState;
        !o && (!e || e === "complete") && (o = 1) && k();
    };
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(l, t);
})(function(){
    HotelWidget.init({
        // ID организации; ID html элемента нужно проставить ниже в поле container
        hotelId: "48df3784-4a11-4764-a345-88b64bdc2ffc",
        version: "2",
        baseUrl: "https://bookonline24.ru/",
        hooks: {
            onError: function(e) { console.error("onError", e); },
            onInit: function() { console.log("onInit"); },
            onBooking: function(v) { console.log("onBooking", v) }
        }
    }); 

   

    <!-- Бронирование номеров -->
    HotelWidget.add({
        type: "roomsList",
        appearance: {
            // Замените на ID html элемента, в который нужно вставить виджет
            container: "WidgetRoomsListId"
        }
    });
});
