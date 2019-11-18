import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjq63ED4ak5RNgm4xs95OSHa1ubTuL1vY",
    authDomain: "expensify-bec5d.firebaseapp.com",
    databaseURL: "https://expensify-bec5d.firebaseio.com",
    projectId: "expensify-bec5d",
    storageBucket: "expensify-bec5d.appspot.com",
    messagingSenderId: "11512956712",
    appId: "1:11512956712:web:7660db72ebff88b606721d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };



// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());

// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });

//     });
//     console.log(expenses);

// });
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'nothing to see',
//     amount: 16000,
//     createdAt: 765432
// });


// database.ref('notes/-LttG0iVZXbt39hLEHOS').update({
//     body: 'Buy food'
// })
// database.ref('notes').push({
//     titel: 'Course Topics',
//     body: 'React Native Angular Python'
// });
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error:', e);
// });

// database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val()
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// });
// setTimeout(() => {
//     database.ref('job/company').set('facebook');
//     database.ref().on('value', (snapshot) => {
//         console.log(snapshot.val());
//     })
// }, 3000);



// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Daviel',
//     age: 39,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developper',
//         company: 'Google'

//     },
//     location: {
//         city: 'paris',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((e) => {
//     console.log('this failed. ', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'lille'
// });
// database.ref('atributes/').set({
//     height: 1.83,
//     weigth: 70
// }).then(() => {
//     console.log('everything  ok ')
// }).catch((e) => {
//     console.log('everything  not ok ');
// })
// database.ref('isSingle').remove().then(() => {
//     console.log('data remove');
// }).catch((e) => {
//     console.log(`data not removed: ${e}`)
// })
