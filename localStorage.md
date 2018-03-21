# Local Storage

Allows the storage of data directly in the browser.

As opposed as sessionStorage, the data will be stored even if the browser or tab is closed

localStorage is an **Object**

It has several methods :

- **setItem**(key,value) : stores a pair key/value
- **getItem**(key) : returns the key's value
- **removeItem**(key) : deletes the pair key/value if the given key
- **key**(index) : returns the index of the given key
- **clear()** : deletes all the pairs

