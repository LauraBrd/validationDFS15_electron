//var fs = require('fs');
//var jsPDF = require('jspdf');
//window.jsPDF = require('jspdf');
//import jsPDF from 'jspdf';
//require('jspdf-autotable');
const fs = require('fs');
//const jsPDF = require('jspdf');
var PDFDocument = require('pdfkit'); 

//import {jsPDF} from 'jspdf';


window.addEventListener('DOMContentLoaded', () => {

  //const demarrer = document.getElementById("demarrer");
  //const validQuestion1 = document.getElementById("validQuestion1").value;
  const reponseQ1 = 8;
  const reponseQ2 = "1,08 x 10^9 km/h";
  const reponseQ3 = "Une galaxie";
  const resultats = {};


  if (typeof demarrer !== 'undefined') {
    document.getElementById("demarrer").addEventListener('click', evt => {
      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const email = document.getElementById("email").value;
      const error = "Identifiants incorects";
      
      if (nom == "admin" && prenom == "admin" && email == "admin@admin.fr") {
        window.location.href = "question1.html";
      } else {
        alert(error);
      }
    })
  }

  if (typeof validQuestion1 !== 'undefined') {
    document.getElementById("validQuestion1").addEventListener('click', evt => {

      if (!document.querySelector('input[name="reponse"]:checked')) {
        alert("veuillez sélectionner une réponse.")
      } else {
        // récupère la valeur checkée du bouton radio
        var valeur1 = document.querySelector('input[name="reponse"]:checked').value;

        // Si notre réponse est égale à la bonne réponse, bien joué
        if(valeur1 == reponseQ1) {
          alert('Bonne réponse, bien joué !');
          // ajouter valeur dans fichier json
          resultats.resultat1 = valeur1;
          window.location.href = "question2.html";
        } else {
          alert('Dommage, mauvaise réponse !');
          // ajouter valeur dans fichier json
          resultats.resultat1 = valeur1;
          window.location.href = "question2.html";
        }
      }
    })
  }


  if (typeof validQuestion2 !== 'undefined') {
    document.getElementById("validQuestion2").addEventListener('click', evt => {

      if (!document.querySelector('input[name="reponse"]:checked')) {
        alert("veuillez sélectionner une réponse.")
      } else {
        // récupère la valeur checkée du bouton radio
        var valeur2 = document.querySelector('input[name="reponse"]:checked').value;

        // Si notre réponse est égale à la bonne réponse, bien joué
        if(valeur2 == reponseQ2) {
          alert('Bonne réponse, bien joué !');
          // ajouter valeur dans fichier json
          resultats.resultat2 = valeur2;
          window.location.href = "question3.html";
        } else {
          alert('Dommage, mauvaise réponse !');
          // ajouter valeur dans fichier json
          resultats.resultat2 = valeur2;
          window.location.href = "question3.html";
        }
      }
    })
  }
    

  if (typeof validQuestion3 !== 'undefined') {
    document.getElementById("validQuestion3").addEventListener('click', evt => {

      if (!document.querySelector('input[name="reponse"]:checked')) {
        alert("veuillez sélectionner une réponse.")
      } else {
        // récupère la valeur checkée du bouton radio
        var valeur3 = document.querySelector('input[name="reponse"]:checked').value;

        // Si notre réponse est égale à la bonne réponse, bien joué
        if(valeur3 == reponseQ3) {
          alert('Bonne réponse, bien joué !');
          // ajouter valeur dans fichier json
          resultats.resultat3 = valeur3;
          window.location.href = "question3.html";
        } else {
          alert('Dommage, mauvaise réponse !');
          // ajouter valeur dans fichier json
          resultats.resultat3 = valeur3;
          window.location.href = "resultat.html";
        }
      }

      // Calcul du résultat
      if(valeur1 == reponseQ1) {
        res1 = 1;
      } else {
        res1 = 0;
      }

      if(valeur2 == reponseQ2) {
        res2 = 1;
      } else {
        res2 = 0;
      }

      if(valeur2 == reponseQ2) {
        res3 = 1;
      } else {
        res3 = 0;
      }

      const resTotal = res1+res2+res3;

      document.getElementsById("totalResult").innerHTML = resTotal;
    })
  }





    //var chaineJSON = JSON.stringify(resultats);
    //alert(chaineJSON);
    // TABLEAU JSON
    //var resultats = {};
    //resultats.resultat1 = 6;
    //resultats.resultat2 = 4;
   // var chaineJSON = JSON.stringify(resultats);
    //console.log(chaineJSON);


  /*
  const resultat1 = valeur1;
  const resultat2 = valeur2;
  const resultat3 = valeur3;*
  */


  // Génération du pdf
  if (typeof exportPDF !== 'undefined') {
    document.getElementById("exportPDF").addEventListener('click', evt => {
      
      // Enregistrement au format PDF
      var WRep = window.confirm("Confirmation de l'exportation en PDF ?");
      if (WRep) {
        doc = new PDFDocument();
        doc.pipe( fs.createWriteStream('out.pdf') );
        doc.moveTo(300, 75)
        .lineTo(373, 301)
        .lineTo(181, 161)
        .lineTo(419, 161)
        .lineTo(227, 301)
        .fill('red', 'even-odd');  
        var texte = '';  
        doc.y = 320;
        doc.fillColor('black')
        doc.text(texte, {
        paragraphGap: 10,
        indent: 20,
        align: 'justify',
        columns: 2
        });  
        doc.save('out.pdf');
        doc.end('out.pdf');
        console.log(doc)
      }
    })
  }
      /////////// OU BIEN /////////
      /*
      doc = new PDFDocument;
      doc.pipe.fs.createWriteStream('output.pdf')
      doc.font('fonts/PalatinoBold.ttf')
        .fontSize(25)
        .text('Some text with an embedded font!', 100, 100)
      doc.image('path/to/image.png', {
        fit: [250, 300],
        align: 'center',
        valign: 'center'
      });
      doc.addPage()
        .fontSize(25)
        .text('Here is some vector graphics...', 100, 100)
      doc.end();
      */

      /////////// OU BIEN /////////
      /*
      var doc = new jsPDF();
      doc.text('Hello, world.', 20, 20);
      doc.save('Test.pdf', function(err){console.log('saved!');});

      var doc = new jsPDF();
      doc.text('Bonjour tout le monde!', 10, 10);
      //doc.save('a4.pdf');
      var data = doc.output();
      fs.writeFileSync('./document.pdf', data, 'binary');
      */

})
