/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of reserved characters:
 *     1. Opening Character, "^"
 *     2. Closing Character, "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - Likewise, whenever a Closing Character appears, means a corresponding
 *     Opening Character must have appeared previously.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$$^" => false
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React from 'react';

export function Input(props) {
  return <input type="text" id="text" />;

}

export function Button(props) {
  
  return <button   onClick={ (e) => props.setCheckText()} > Validate</button>;

}

export function Output(props) {

  let message = ''
  if (props.error) {
    message = <h4>Validation: Pass </h4>
  } else if (!props.error && props.error != null) {
    message = <h4>Validation: Fail </h4>
  }
  return <div>
    {message}
  </div>;
}

export function isClosed(str) {
  let stringArray = str.split('')
  //filter to reduce number of loops required
  stringArray = stringArray.filter(char => char === '^' || char === '$')
  let counter = null

  for (let x = 0; x < stringArray.length; x++) {
    if (counter < 0) {
      return false
    } else if (stringArray[x] === '^') {
      counter++
    }
    else if (stringArray[x] === '$') {
      counter--
    }
  }
  if (counter === 0) {
    return true
  } else {
    return false
  }

}

export class ComputeIO extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
     
      error: null,
  
    };
    this.setCheckText =this.setCheckText.bind(this)
  }
  setCheckText () {
   
    var inputNode =  document.getElementById("text")
    let outCome = false
    if(inputNode != null){
      outCome = isClosed(inputNode.value)
    }
    this.setState({
      error : outCome
    })

  }
  
  render() {
    return (
      <section>
        <div>
          <Input />
          <Button  setCheckText={this.setCheckText} />
        </div>
        <Output error={this.state.error}  />
      </section>
    );
  }
}
