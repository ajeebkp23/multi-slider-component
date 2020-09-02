var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      donationList: [
          {
            title: 'Community projects',
            content: 'I support LoCo teams, UbuCons and other events, upstream projects and all the good work the community does. ',
            amount: 3,
          },
          {
              title: 'Ubuntu Desktop',
              content: ' Make the desktop even more amazing. ',
              amount: 29
          },
          {
              title: 'Tip to Canonical',
              content: ' Hats off for making Ubuntu possible. Keep it up. ',
              amount: 55
          },
          {
              title: 'Ubuntu for IoT',
              content: 'I want a secure, upgradeable Internet of Things, powered by Ubuntu.',
              amount: 90
          },
          {
              title: 'Ubuntu Server & Cloud',
              content: 'I want Ubuntu Server running my servers, cloud and as a guest everywhere.',
              amount: 120
          }
      ]
    },
    computed: {
        total: function(){
            var summed = 0;
            for(var donation of this.donationList){
                summed += parseInt(donation.amount);
            }
            return summed;
        }
    }
  });