import { StyleSheet } from "react-native"
const styles = StyleSheet.create({

  formContent:{
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form:{
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,

  },
  formLabel:{
    color: '#000',
    fontSize: 18,
    textAlign: 'center'
  },
  formInput:{
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
   paddingLeft: 10,
    height: 40,
    margin:12,
  },
  formButtom:{
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#bd00ff',
    paddingTop:14,
    paddingBottom:14,
    marginLeft: 12,
    margin:30,
  },
  formButtomText:{
    fontSize: 20,
    color: '#fff',
  }
})
export default styles;