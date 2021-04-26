function aggiungiEventi(contenutiCalendario){
      
    for(let i of contenutiCalendario){        
        
        let evento=document.createElement("div");
            evento.setAttribute('class', 'evento'); 

            let conten=document.createElement("div");
            conten.setAttribute('class', 'conten');
            
        
            let descEvento=document.createElement("h3");      
            let testoEv=document.createTextNode(i.summary);

            let immagine=document.createElement("img");
            immagine.src="img/calendar.png";
            conten.appendChild(immagine);

            descEvento.appendChild(testoEv);
            conten.appendChild(descEvento);
            evento.appendChild(conten);


        if(i.recurrence){
            
            let variabile=i.recurrence[0].split("BYDAY=")[1].split(",");
            console.log(variabile);
          
            let lista=document.createElement("ul"); //creo la lista, elenco puntato


            for(let i of variabile){ /*se si tratta dell'allenamento settimanale o di qualcosa che ha una ricorrenza */

                    let lista2=document.createElement("li");
                    let testo=document.createTextNode(giorni[i]);
                    lista2.appendChild(testo);
                    lista.appendChild(lista2);
    
            }
             evento.appendChild(lista);
            

            }else if(i.start.date){

                let capo2=document.createElement("br");
                let dataIn=document.createElement("p"); //descrizione evento
                let testoDi=document.createTextNode("Data inizio: "+i.start.date);
                
                let testoDf=document.createTextNode("Data fine: "+i.end.date);
                dataIn.appendChild(testoDi);
                dataIn.appendChild(capo2);
                dataIn.appendChild(testoDf);
                evento.appendChild(dataIn);
                
            }else{

                let capo=document.createElement("br");
                let capo1=document.createElement("br");
                let oraIn=document.createElement("p"); //descrizione evento

                let testoOi=document.createTextNode("Data: "+i.start.dateTime.split("T")[0]);//prende solo la data di inizio
                let testOraInizio=document.createTextNode("Ora di inizio "+i.start.dateTime.split("T")[1].split("+")[0]);//questo prende l'ora di inizio
                let testoOf=document.createTextNode("Ora di fine: "+i.end.dateTime.split("T")[1].split("+")[0]);// questo prende l'ora di fine
                oraIn.appendChild(testoOi);
                oraIn.appendChild(capo);
                oraIn.appendChild(testOraInizio);
                oraIn.appendChild(capo1);
                oraIn.appendChild(testoOf); 
                evento.appendChild(oraIn);
  

            }

        eventi.appendChild(evento);
     
    }       

    
}    
const eventi=document.querySelector("#eventi");


const giorni= {         
    "MO": "Lunedì",
    "TU":"Martedì",
    "WE": "Mercoledì",
    "TH":"Giovedì",
    "FR": "Venerdì",
    "SA": "Sabato",
    "SU":"Domenica"
}


const accessToken=location.hash.split('access_token=')[1].split('&')[0]; /* location serve a sapere in quale pag siamo, 
in hash c'è il link della barra degli indirizzi */

console.log(accessToken);

const calendarId="u8rm62puanomf217cinpuosets@group.calendar.google.com";
const allenamentoId= "1pj1np491sfs5ikbhrugfssk38";//singolo evento

fetch ("https://www.googleapis.com/calendar/v3/calendars/"+calendarId+"/events?alwaysIncludeEmail=true",{ headers:
{

    'Authorization': 'Bearer ' + accessToken,

    'Accept': 'application/json' //accetto solo file json

}

}).then(onResponse).then(onJson);


function onJson(json){ 
    console.log(json);
    aggiungiEventi(json.items);
}

function onResponse(response) {
    return response.json();
}

