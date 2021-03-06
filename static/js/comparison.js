/**
 * Created by Maira on 5/7/15.
 */
var g_artists_list = [];
var ma_artists_list = [];
var me_artists_list = [];
function crete_word_clouds(){
    var colors = {
        'jazz_blues': '#774306',
        'pop':'#FE0000',
        'metal':'#97253F',
        'rock':'#016AAB',
        'hip-hop_rap':'#019F4C',
        'dance_electronic':'#FE7314',
        'alternative_indie': '#6869A9',
        'reb_soul':'#FBDE06',
        'other':'#F0C896'};

    var minsize = '8px';
    var gabriela_average = 0;
    $.each(gabriela_artists, function(i,v){
        gabriela_average = gabriela_average + v[1];
        if (g_artists_list.indexOf(v[0]) == -1) {
          g_artists_list.push(v[0]);
        }
    });
    gabriela_average = gabriela_average/gabriela_artists.length;
    var maira_average = 0;
    $.each(maira_artists, function(i,v){
        maira_average = maira_average + v[1];
        if (ma_artists_list.indexOf(v[0]) == -1) {
          ma_artists_list.push(v[0]);
        }
    });
    maira_average = maira_average/maira_artists.length;
    var mehreen_average = 0;
    $.each(mehreen_artists, function(i,v){
        mehreen_average = mehreen_average + v[1];
        if (me_artists_list.indexOf(v[0]) == -1) {
          me_artists_list.push(v[0]);
        }
    });
    mehreen_average = mehreen_average/mehreen_artists.length;
    WordCloud(document.getElementById('gabriela'), {
        list: gabriela_artists,
        shuffle: false,
        hover: function(){},
        minSize: minsize,
        weightFactor: function (size) {
            return Math.max(1.5*(size/gabriela_average), 10);
        },
        backgroundColor: '#FFFFFF',
        color: function(word){
            return colors[artists_genres[word]];
        }
    });
    WordCloud(document.getElementById('maira'), {
        list: maira_artists,
        shuffle: false,
        hover: function(){},
        minSize: minsize,
        weightFactor: function (size) {
            return Math.max(2.5*(size/maira_average), 10);
        },
        backgroundColor: '#FFFFFF',
        color: function(word){
            return colors[artists_genres[word]];
        }
    });
    WordCloud(document.getElementById('mehreen'), {
        list: mehreen_artists,
        shuffle: false,
        hover: function(){},
        minSize: minsize,
        weightFactor: function (size) {
            return Math.max(2.5*(size/mehreen_average), 10);
        },
        backgroundColor: '#FFFFFF',
        color: function(word){
            return colors[artists_genres[word]];
        }
    });
}

function new_songs_frequency() {
    return [
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0},
        {total: 0, jazz_blues:0, pop:0, metal:0, rock:0, 'hip-hop_rap':0, dance_electronic:0, alternative_indie:0, reb_soul:0, other:0}
    ];
}
var gabriela_frequencies = new_songs_frequency();
var maira_frequencies = new_songs_frequency();
var mehreen_frequencies = new_songs_frequency();
var g_songs_list = [];
var ma_songs_list = [];
var me_songs_list = [];
var songs_list = [];
var max = 0;
function initialize_frequencies(){
    $.each(gabriela_songs, function(i,v){
        var date_ts = parseInt(v[4], 10);
        if (date_ts != 0) {
            var date = new Date(date_ts*1000);
            var hour = date.getHours();
            var gender = v[1];
            gabriela_frequencies[parseInt(hour)].total++;
            gabriela_frequencies[parseInt(hour)][gender]++;
        }
        if(g_songs_list.indexOf(v[0]) == -1){
            g_songs_list.push(v[0]);
        }
        if(songs_list.indexOf(v[0]) == -1){
            songs_list.push(v[0]);
        }
    });
    $.each(maira_songs, function(i,v){
        var date_ts = parseInt(v[4], 10);
        if (date_ts != 0) {
            var date = new Date(date_ts*1000);
            var hour = date.getHours();
            var gender = v[1];
            maira_frequencies[parseInt(hour)].total++;
            maira_frequencies[parseInt(hour)][gender]++;
        }
        if(ma_songs_list.indexOf(v[0]) == -1){
            ma_songs_list.push(v[0]);
        }
        if(songs_list.indexOf(v[0]) == -1){
            songs_list.push(v[0]);
        }
    });
    $.each(mehreen_songs, function(i,v){
        var date_ts = parseInt(v[4], 10);
        if (date_ts != 0) {
            var date = new Date(date_ts*1000);
            var hour = date.getHours();
            var gender = v[1];
            mehreen_frequencies[parseInt(hour)].total++;
            mehreen_frequencies[parseInt(hour)][gender]++;
        }
        if(me_songs_list.indexOf(v[0]) == -1){
            me_songs_list.push(v[0]);
        }
        if(songs_list.indexOf(v[0]) == -1){
            songs_list.push(v[0]);
        }

    });
    set_events();
}

function update_max(genre) {
    max = 0;
    $.each(gabriela_frequencies, function(i,v){
        if (genre == 'total') {
            if (v.total > max) {
                max = v.total;
            }
        } else {
            if(v[genre] > max) {
                max = v[genre]
            }
        }
    });
    $.each(maira_frequencies, function(i,v){
        if (genre == 'total') {
            if (v.total > max) {
                max = v.total;
            }
        } else {
            if(v[genre] > max) {
                max = v[genre]
            }
        }
    });
    $.each(mehreen_frequencies, function(i,v){
        if (genre == 'total') {
            if (v.total > max) {
                max = v.total;
            }
        } else {
            if(v[genre] > max) {
                max = v[genre]
            }
        }
    });
    max ++;
}

function create_hours_comparison(t){
    update_max(t);
    update_max(t);
    update_max(t);
    var hours_frequency_axis_html = '';
    var height = Math.floor(503/max);
    for(var i = max; i >= 0; i --) {
        hours_frequency_axis_html += '<li style="height: '+height+'px;">'+i+'</li>'
    }
    get_canvas(gabriela_frequencies, t, 'histogram_gabriela', '#90d680', height);
    get_canvas(maira_frequencies, t, 'histogram_maira', '#e81998', height);
    get_canvas(mehreen_frequencies, t, 'histogram_mehreen', '#c398e0', height);
    $('#hours_frequency_axis').addClass('unfrequent').html('').append(hours_frequency_axis_html);
}

function get_point(genre, hour, data, height){
    var x = Math.floor((hour*52)+(50/2)+10);
    if (hour == 0) {
        x = 0
    }
    if (hour == 23) {
        //alert('hi');
        x = 49*24;
    }
    return {x: x, y: Math.floor(503 - data[genre]*height)-2};
}

function daydiff(first_day, last_day) {
    var date = parseInt(first_day, 10);
    var date = new Date(date*1000);
    last_day = parseInt(last_day, 10);
    last_day = new Date(last_day*1000);
    return Math.ceil((last_day-date)/(1000*60*60*24));
}

function get_canvas(dataPoints, genre, canvas_id, color, square_height){
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext('2d');
    canvas.width = 49*24;
    canvas.height = 503;
    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    ctx.lineWidth = 3;
    var point = get_point(genre, 0, dataPoints[0], square_height);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    $.each(dataPoints, function(i, v){
        var point = get_point(genre, i, v, square_height);
        if (i == dataPoints.length -2) {
            var point2 = get_point(genre, i, dataPoints[i+1], square_height);
            ctx.lineTo(point.x, point.y);
            ctx.lineTo(point2.x, point2.y);
        } else if (i != dataPoints.length -1) {
            point2 = get_point(genre, i, dataPoints[i+1], square_height);
            var xc = (point.x + point2.x)/2;
            var yc = (point.y + point2.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            xc = (xc + point.x)/2;
            yc = (yc + point.y)/2;
            ctx.bezierCurveTo(point.x, point.y,point.x, point.y, xc, yc);
        }
    });
    ctx.strokeStyle = color;
    ctx.stroke();
}

function set_events() {
    $('.button').bind('click', function(){
        var t = $(this).attr('data-id');
        create_hours_comparison(t);
        $('.button').removeClass('selected');
        $(this).addClass('selected');
        $('#hours_histogram').find('.title').html(get_hours_comparison_title(t));
    });
}

function get_hours_comparison_title(t) {
    switch (t) {
        case 'total':
            return 'All Genres';
        case 'jazz_blues':
            return 'Jazz/Blues';
        case 'pop':
            return 'Pop';
        case 'metal':
            return 'Metal';
        case 'rock':
            return 'Rock';
        case 'hip-hop_rap':
            return 'Hip-hop/Rap';
        case 'dance_electronic':
            return 'Dance/Electronic';
        case 'alternative_indie':
            return 'Alternative/Indie';
        case 'reb_soul':
            return 'R&B/Soul';
        case 'other':
            return 'Others';
    }
}

function create_venn_diagram(){
    var gabriela = 0;
    var maira = 0;
    var mehreen = 0;
    var gabriela_maira = 0;
    var gabriela_mehreen = 0;
    var maira_mehreen = 0;
    var gabriela_maira_mehreen = 0;
    $.each(Object.keys(artists_genres), function(i, v){
        if(g_artists_list.indexOf(v) != -1){
            gabriela ++;
            if (ma_artists_list.indexOf(v) != -1) {
                maira++;
                gabriela_maira++;
                if(me_artists_list.indexOf(v) != -1){
                    mehreen ++;
                    gabriela_mehreen ++;
                    maira_mehreen ++;
                    gabriela_maira_mehreen ++;
                }
            }
        } else {
            if(ma_artists_list.indexOf(v) != -1){
                maira ++;
                if(me_artists_list.indexOf(v) != -1) {
                    mehreen++;
                    maira_mehreen++;
                }
            } else {
                if(me_artists_list.indexOf(v) != -1){
                    mehreen++;
                }
            }
        }
    });
    var sets = [ {sets: ['Gabriela'], size: gabriela},
                 {sets: ['Maira'], size: maira},
                 {sets: ['Mehreen'], size: mehreen},
                 {sets: ['Gabriela','Maira'], size: gabriela_maira},
                 {sets: ['Gabriela','Mehreen'], size: gabriela_mehreen},
                 {sets: ['Maira','Mehreen'], size: maira_mehreen},
                 {sets: ['Gabriela', 'Maira','Mehreen'], size: gabriela_maira_mehreen}
            ];

    var chart = venn.VennDiagram()
                 .width(500)
                 .height(500);

    var div = d3.select("#venn");
    div.datum(sets).call(chart);

    var tooltip = d3.select("body").append("div")
        .attr("class", "venntooltip");

    div.selectAll("path")
        .style("stroke-opacity", 0)
        .style("stroke", "#fff")
        .style("stroke-width", 0);

    div.selectAll("g")
    .on("mouseover", function(d, i) {
        // sort all the areas relative to the current item
        venn.sortAreas(div, d);

        // Display a tooltip with the current size
        tooltip.transition().duration(400).style("opacity", .9);
        tooltip.text(d.size + " Artists");

        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 3)
            .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
            .style("stroke-opacity", 1);
    })

    .on("mousemove", function() {
        tooltip.style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
    })

    .on("mouseout", function(d, i) {
        tooltip.transition().duration(400).style("opacity", 0);
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 0)
            .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
            .style("stroke-opacity", 0);
    });

}

function create_venn_diagram_songs(){
    var gabriela = 0;
    var maira = 0;
    var mehreen = 0;
    var gabriela_maira = 0;
    var gabriela_mehreen = 0;
    var maira_mehreen = 0;
    var gabriela_maira_mehreen = 0;
    $.each(songs_list, function(i, v){
        if(g_songs_list.indexOf(v) != -1){
            gabriela ++;
            if (ma_songs_list.indexOf(v) != -1) {
                maira++;
                gabriela_maira++;
                if(me_songs_list.indexOf(v) != -1){
                    mehreen ++;
                    gabriela_mehreen ++;
                    maira_mehreen ++;
                    gabriela_maira_mehreen ++;
                }
            }
        } else {
            if(ma_songs_list.indexOf(v) != -1){
                maira ++;
                if(me_songs_list.indexOf(v) != -1) {
                    mehreen++;
                    maira_mehreen++;
                }
            } else {
                if(me_songs_list.indexOf(v) != -1){
                    mehreen++;
                }
            }
        }
    });
    var sets = [ {sets: ['Gabriela'], size: gabriela},
                 {sets: ['Maira'], size: maira},
                 {sets: ['Mehreen'], size: mehreen},
                 {sets: ['Gabriela','Maira'], size: gabriela_maira},
                 {sets: ['Gabriela','Mehreen'], size: gabriela_mehreen},
                 {sets: ['Maira','Mehreen'], size: maira_mehreen},
                 {sets: ['Gabriela', 'Maira','Mehreen'], size: gabriela_maira_mehreen}
            ];

    var chart = venn.VennDiagram()
                 .width(500)
                 .height(500);

    var div = d3.select("#venn_songs");
    div.datum(sets).call(chart);

    var tooltip = d3.select("body").append("div")
        .attr("class", "venntooltip");

    div.selectAll("path")
        .style("stroke-opacity", 0)
        .style("stroke", "#fff")
        .style("stroke-width", 0);

    div.selectAll("g")
    .on("mouseover", function(d, i) {
        // sort all the areas relative to the current item
        venn.sortAreas(div, d);

        // Display a tooltip with the current size
        tooltip.transition().duration(400).style("opacity", .9);
        tooltip.text(d.size + " Songs");

        // highlight the current path
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 3)
            .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
            .style("stroke-opacity", 1);
    })

    .on("mousemove", function() {
        tooltip.style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
    })

    .on("mouseout", function(d, i) {
        tooltip.transition().duration(400).style("opacity", 0);
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection.select("path")
            .style("stroke-width", 0)
            .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
            .style("stroke-opacity", 0);
    });

}