var S=[
{id:"citizenship",n:"Citizenship certificate",d:"Nepali citizenship (nagarikta) from the District Administration Office",
 q:"What is your situation?",
 v:[
 {k:"desc",l:"By descent (age 16+)",docs:[["Father’s or mother’s citizenship certificate","Original, plus a photocopy"],["Your birth registration certificate","From the local ward office"],["Recommendation letter from your ward office","Confirms your permanent residence and relation"],["Proof of residence","Land ownership certificate or rent/occupancy proof, if requested"],["2 passport-size photos","Recent, plain background"],["Your SEE/school certificate","Useful as age proof"]]},
 {k:"mar",l:"Married woman",docs:[["Husband’s citizenship certificate","Original, plus a photocopy"],["Your own citizenship certificate or parents’ certificate","To prove your identity"],["Marriage registration certificate","From the local ward office"],["Ward recommendation letter","Confirms marriage and residence"],["2 passport-size photos","Recent, plain background"]]},
 {k:"copy",l:"Duplicate (lost or damaged)",docs:[["Copy of the old certificate, if you have one","Or the certificate number"],["Police report or news notice about the loss","Required for a lost certificate"],["Ward recommendation letter","Confirms your identity and address"],["Parent’s citizenship certificate","Helps the officer verify you"],["2 passport-size photos","Recent, plain background"]]}],
 steps:["Collect your documents and get the ward office recommendation letter.","Go to the District Administration Office (DAO) of your permanent address district.","Fill in the application form at the DAO and submit it with your documents.","The officer checks your records and may call witnesses or relatives to verify.","Pay any fee, then collect your certificate on the date you are given."],
 office:{n:"District Administration Office (DAO)",w:"The district of your permanent address, not where you currently live.",h:"Sunday to Friday, about 10:00 to 17:00. Closes earlier in winter.",c:"Ward office first, for the recommendation letter."},
 link:"https://moha.gov.np",lt:"Open Ministry of Home Affairs"},

{id:"passport",n:"Passport",d:"Machine-readable and e-passport from the Department of Passports",
 q:"What do you need?",
 v:[
 {k:"new",l:"First passport",docs:[["Citizenship certificate","Original, plus a photocopy"],["National ID number or NID card","Needed for the online form"],["Online application form, printed","Fill it in on the official site"],["Payment receipt","Bank or online payment slip"],["Minor? Birth certificate and a parent’s citizenship","For applicants under 16"]]},
 {k:"renew",l:"Renewal (expired)",docs:[["Old passport","Original"],["Citizenship certificate","Original, plus a photocopy"],["Online application form, printed","Fill it in on the official site"],["Payment receipt","Bank or online payment slip"]]},
 {k:"lost",l:"Lost passport",docs:[["Police report","From the local police office"],["Copy of the lost passport, if available","Or the passport number"],["Citizenship certificate","Original, plus a photocopy"],["Online application form, printed","Fill it in on the official site"],["Payment receipt","Bank or online payment slip"]]}],
 steps:["Fill in the online passport form and choose an appointment slot.","Pay the fee and print the receipt.","Go to the passport office on your date with all original documents.","Give your fingerprints and photo at the counter.","Collect your passport on the date given, or check status online."],
 office:{n:"Department of Passports (Kathmandu) or a District Administration Office that issues passports",w:"Pick the office when you book online.",h:"Sunday to Friday, office hours. Bring your appointment slip.",c:"Check the official site for current passport offices."},
 link:"https://nepalpassport.gov.np",lt:"Open official passport site"},

{id:"license",n:"Driving licence",d:"Two-wheeler and car licence from the transport office",
 q:"What do you need?",
 v:[
 {k:"new",l:"New licence",docs:[["Citizenship certificate","Original, plus a photocopy"],["Medical certificate","From a recognised hospital or clinic"],["Blood group report","Part of the medical check"],["Online form receipt","Fill in on the official licence portal"],["2 passport-size photos","Recent"]]},
 {k:"renew",l:"Renewal",docs:[["Old licence","Original"],["Citizenship certificate","Photocopy"],["Medical certificate","Required at renewal"],["Renewal fee receipt","Pay online or at the office"]]},
 {k:"add",l:"Add a new category",docs:[["Existing licence","Original"],["Citizenship certificate","Photocopy"],["Medical certificate","Recent one"],["Training certificate, if required","For some categories"]]}],
 steps:["Create your account on the licence portal and fill in the form.","Pick your transport office and trial date.","Pay the fee and keep the receipt.","Go to the office with your documents for the written test and the trial.","Pass the tests, then collect the licence or its delivery details."],
 office:{n:"Transport Management Office",w:"Choose the office for your province or district when booking.",h:"Sunday to Friday, office hours. Trials run on your booked date.",c:"Use the licence portal to see available offices."},
 link:"https://dotm.gov.np",lt:"Open Department of Transport Management"},

{id:"nid",n:"National ID card",d:"Register for the Nepal national identity card",
 q:"What do you need?",
 v:[
 {k:"new",l:"New enrolment",docs:[["Citizenship certificate","Original"],["Online pre-enrolment form","Fill it in on the official portal"],["Parent or spouse details","Names and citizenship numbers"],["Mobile number","Used for updates"]]},
 {k:"min",l:"Child or minor",docs:[["Birth registration certificate","Original"],["Parent’s citizenship certificate","Original"],["Online pre-enrolment form","Fill it in on the official portal"]]}],
 steps:["Fill in the pre-enrolment form online.","Visit the enrolment centre listed for your area.","Give fingerprints, iris scan and a photo.","Receive your enrolment slip and NID number.","Collect the card when it is ready, or check the status online."],
 office:{n:"National ID enrolment centre or the District/Municipal registration office",w:"Your local area. Check the portal for the centre nearest you.",h:"Sunday to Friday, office hours.",c:"Ward office can tell you which centre serves you."},
 link:"https://donidcr.gov.np",lt:"Open National ID portal"},

{id:"pan",n:"PAN registration",d:"Permanent Account Number for tax from the Inland Revenue Department",
 q:"Who is registering?",
 v:[
 {k:"ind",l:"Individual or freelancer",docs:[["Citizenship certificate","Photocopy"],["Passport-size photo","Recent"],["Proof of address","Ward letter or rent agreement"],["Business or work details","What you do and where"]]},
 {k:"biz",l:"Small business",docs:[["Owner’s citizenship certificate","Photocopy"],["Business registration certificate","From the local office or company registrar"],["Rent agreement or land ownership proof","For the business address"],["Passport-size photo","Recent"],["Business name board photo","Sometimes asked for"]]}],
 steps:["Open the Inland Revenue Department’s online PAN registration.","Fill in your personal and business details and upload documents.","Submit the form and note the application number.","Visit the Inland Revenue Office if asked for verification.","Receive your PAN and use it for bills and tax filing."],
 office:{n:"Inland Revenue Office",w:"The office covering your business or home address.",h:"Sunday to Friday, office hours.",c:"The online form lists the office for your district."},
 link:"https://ird.gov.np",lt:"Open Inland Revenue Department"},

{id:"birth",n:"Birth registration",d:"Register a birth with the local ward office",
 q:"When did the birth happen?",
 v:[
 {k:"in35",l:"Within 35 days",docs:[["Hospital birth slip, if any","Or a written statement of the birth"],["Parents’ citizenship certificates","Photocopies"],["Parents’ marriage registration certificate","If available"],["Application form","Available at the ward office"]]},
 {k:"late",l:"After 35 days (late)",docs:[["Parents’ citizenship certificates","Photocopies"],["Parents’ marriage registration certificate","If available"],["Ward recommendation letter","Confirms the birth"],["Immunisation card or hospital record","Supports the date"],["Late registration fee","Ask the ward office for the amount"]]}],
 steps:["Take your documents to the ward office where you live.","Fill in the vital event registration form.","The registrar checks the details and records the birth.","Pay the late fee if the birth is past the deadline.","Collect the birth certificate."],
 office:{n:"Ward office (Local Registrar)",w:"The ward where the child’s parents live.",h:"Sunday to Friday, office hours.",c:"Call your ward office first to confirm what they accept."},
 link:"https://donidcr.gov.np",lt:"Open civil registration portal"}
];
