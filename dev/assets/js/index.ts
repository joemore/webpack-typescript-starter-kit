import '../css/style.css'; 
import '../css/custom1.css'; 





import CustomFunc1 from './custom1';
import CustomFunc2 from './custom2';

CustomFunc1({ 
    name: 'Joe',
    age : 41,
})

CustomFunc2([
    {
        id: 1,
        label : 'Foo',
        key : '123'
    },
    {
        id: 2,
        label : 'Bar',
        key : 1*10
    },
])