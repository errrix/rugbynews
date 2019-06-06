import React from "react";
import Scrollbar from "react-scrollbars-custom";
import {Link} from "react-router-dom";

class TestScroll extends React.Component {

    render() {
        return (
            <div>
               <div className="test-scroll">
                   <div className="container">
                       <Scrollbar className="test-scroll" style={{ width: 250, height: 400 }}>
                           <ul>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>6</li>
                               <li>7</li>
                               <li>8</li>
                               <li>9</li>
                               <li>10</li>
                               <li>11</li>
                               <li>12</li>
                               <li>13</li>
                               <li>14</li>
                               <li>15</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>6</li>
                               <li>7</li>
                               <li>8</li>
                               <li>9</li>
                               <li>10</li>
                               <li>11</li>
                               <li>12</li>
                               <li>13</li>
                               <li>14</li>
                               <li>15</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>1</li>
                               <li>2</li>
                               <li>3</li>
                               <li>4</li>
                               <li>5</li>
                               <li>6</li>
                               <li>7</li>
                               <li>8</li>
                               <li>9</li>
                               <li>10</li>
                               <li>11</li>
                               <li>12</li>
                               <li>13</li>
                               <li>14</li>
                               <li>15</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                               <li>16</li>
                           </ul>
                   </Scrollbar>
                   </div>
               </div>
            </div>
        )
    }
};


export default TestScroll;