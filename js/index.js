$(document).ready(function () {
    // main
    var main_arr = [
        //["img", "title", "text"],
        ["if_vector_65_02_473778.svg", "What’s “InvestPlan”?", "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."],
        ["if_vector_65_07_473788.svg", "Breaking down “InvestPlan”", "These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."],
        ["if_vector_65_14_473802.svg", "Incredible Strategy & Analisys", "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."],
    ];
    for(i in main_arr){
        $("main .wrap .cont").append(`
        <div class="box">
            <img src="./img/${main_arr[i][0]}" alt="">
            <h3>${main_arr[i][1]}</h3>
            <p>${main_arr[i][2]}</p>
        </div>
        `);
    };


    // sec2
    var sec2_arr = [
        //["img", "title", "text"],
        ["invest-01.jpg", "Newyork in USA", "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security."],
        ["invest-02.jpg", "Tokyo in Japan", "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for..."],
        ["invest-03.jpg", "Sydney in Australia", "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ..."],
        ["invest-04.jpg", "Istanbul in Turkey", "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be."],
    ];

    for(i in sec2_arr){
        $("#sec2 .wrap .cont").append(`
        <div class="box">
            <div class="img_part" style="background-image:url(./img/${sec2_arr[i][0]});"></div>
            <div class="txt_part">
                <h3>${sec2_arr[i][1]}</h3>
                <p>${sec2_arr[i][2]}</p>
                <div class="btn">
                    <a href="#"><div class="btnImg"></div></a>
                </div>
            </div>
        </div>
        `);
    };

    
    // sec3
    for(i=1; i<11; i++){
        if(i<10){
            $("#sec3 .wrap .img_box").append(`
            <a href="#"><img src="./img/managers/m_0${i}.jpg" alt="manager${i}"></a>
            `);
        }else{
            $("#sec3 .wrap .img_box").append(`
            <a href="#"><img src="./img/managers/m_${i}.jpg" alt="manager${i}"></a>
            `);
        }
    };

});