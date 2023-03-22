import EarthFaceSrc from "../../../assets/mokepons/earth_face.webp"
import WaterFaceSrc from "../../../assets/mokepons/water_face.webp"
import FireFaceSrc from "../../../assets/mokepons/fire_face.webp"
import EarthAttackSrc from "../../../assets/mokepons/earth_attack.png"
import WaterAttackSrc from "../../../assets/mokepons/water_attack.png"
import FireAttackSrc from "../../../assets/mokepons/fire_attack.png"
import { MokeponNames } from "../enums/mokeponNames"

type MokeponAssets = {
  [key in MokeponNames[number]]: { attack: string; face: string }
}

export const mokeponAssets: MokeponAssets = {
  Earth: { attack: EarthAttackSrc, face: EarthFaceSrc },
  Water: { attack: WaterAttackSrc, face: WaterFaceSrc },
  Fire: { attack: FireAttackSrc, face: FireFaceSrc },
}
