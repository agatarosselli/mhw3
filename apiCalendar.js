const client_id="428089864512-7em4c2pi7t44mkajoa51khm75f304brt.apps.googleusercontent.com";


  function oauthSignIn() {

    // Google's OAuth 2.0 endpoint for requesting an access token

    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.

    var form = document.createElement('form');

    form.setAttribute('method', 'GET'); // Send as a GET request.

    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.

    var params = {'client_id': client_id,

                  'redirect_uri': 'http://127.0.0.1:5500/nuova.html',

                  'response_type': 'token',

                  'scope': 'https://www.googleapis.com/auth/calendar.readonly',
                  'include_granted_scopes': 'true',

                  'state': 'pass-through value'};

    // Add form parameters as hidden input values.

    for (var p in params) {

      var input = document.createElement('input');

      input.setAttribute('type', 'hidden');

      input.setAttribute('name', p);

      input.setAttribute('value', params[p]);

      form.appendChild(input);

      console.log(p);

    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.

    document.body.appendChild(form);

    form.submit();

  }

  oauthSignIn();
