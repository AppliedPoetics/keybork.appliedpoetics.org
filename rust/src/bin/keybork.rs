extern crate core;
extern crate rand;

use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize)]
struct Response {
  diff: String,
  letters: Vec<u8>,
  text: String,
}

fn assess_difficulty(factor: String)
  -> f32 {
    let diff;
    match factor.as_ref() {
        "easy" => diff = 0.70,
        "medium" => diff = 0.60,
        "hard" => diff = 0.50,
        "impossible" => diff = 0.30,
        _ => diff = 0.0
      }
    diff
  }

fn avail_keys(factor: String)
  -> Vec<u8> {
    let diff = assess_difficulty(factor);
    let mut keys: Vec<u8> = (0..255)
      .map(|n| n)
      .collect();
    let limit = (keys.len() as f32 * diff).floor();
    for _ in 0..limit as u8 {
      let index = (rand::random::<f32>() * keys.len() as f32)
        .floor() as usize;
      keys.remove(index);
    }
    keys
  }

pub fn main() 
  -> Result<(), std::io::Error> {
    let mut args = core::Task::init();
      args.args();
    let text = core::read(args.file);
    let factor = &args.args[0];
    let keys = avail_keys(factor.to_string());
    let response = Response {
        diff: factor.to_owned(),
        letters: keys.to_owned(),
        text: "".to_owned()
      };
    let json = serde_json::to_string(&response)?;
    println!("{}",json);    

    Ok(())
  }
