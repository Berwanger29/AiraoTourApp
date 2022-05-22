import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={50}
    height={33.5}
    viewBox="0 0 40 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#F9F9F9">
      <Path d="m8.605 9.951-2.79-.085-2.134.051c-.101.237-.213.537-.336.898a18.8 18.8 0 0 1-.454 1.27c-.19.475-.41.954-.656 1.44-.549 1.073-1.075 1.61-1.58 1.61-.437 0-.655-.25-.655-.746 0-.316.308-.78.924-1.389.258-.237.55-.627.874-1.169a9.398 9.398 0 0 0 .874-1.88h-.605a.759.759 0 0 1-.47-.152.59.59 0 0 1-.185-.458c0-.192.067-.35.201-.474a.633.633 0 0 1 .437-.186l1.177.017C4.179 6.564 5.08 5.09 5.933 4.277c-.437 0-1.098.045-1.983.135-.886.08-1.423.119-1.614.119a.759.759 0 0 1-.47-.152.566.566 0 0 1-.202-.458c0-.203.067-.367.202-.491a.712.712 0 0 1 .47-.186L6 3.345l3.983-.101c.202 0 .364.062.488.186a.645.645 0 0 1 .184.474c0 .418-.23.627-.689.627h-.403c0 1.807.073 3.438.219 4.895.145 1.457.29 2.58.437 3.37.145.791.218 1.294.218 1.508a.949.949 0 0 1-.202.576.607.607 0 0 1-.52.254.756.756 0 0 1-.555-.237c-.157-.158-.241-.384-.252-.678l-.303-4.268Zm-.302-5.623-.42-.017c-1.267.124-2.5 1.592-3.698 4.404.963.022 1.557.034 1.781.034.224 0 1.076-.023 2.555-.068-.146-2.496-.218-3.947-.218-4.353Zm4.381 9.468c0-1.423-.028-2.67-.084-3.743a62.355 62.355 0 0 1-.084-1.897c0-.192.073-.379.219-.56.157-.191.341-.287.554-.287.213 0 .387.09.521.27.135.17.202.424.202.763 0 .327-.04.886-.118 1.677-.078.779-.117 1.592-.117 2.439 0 .339.067.666.201.982.146.305.219.588.219.847a.865.865 0 0 1-.219.61c-.134.158-.325.237-.571.237-.235 0-.415-.135-.538-.406a2.227 2.227 0 0 1-.185-.932Zm.538-8.401c-.246 0-.442-.068-.588-.203-.146-.136-.219-.334-.219-.593 0-.26.09-.48.27-.66a.845.845 0 0 1 .638-.289c.246 0 .442.074.588.22.157.136.235.333.235.593 0 .26-.095.48-.285.66a.87.87 0 0 1-.639.272Zm4.726 5.657.135 3.066c0 .305-.079.553-.236.745a.666.666 0 0 1-.537.271.635.635 0 0 1-.521-.254c-.135-.18-.202-.423-.202-.728s.028-.74.084-1.304a29.78 29.78 0 0 0 .168-2.863c0-.339-.106-.66-.32-.965-.201-.317-.302-.599-.302-.847a.8.8 0 0 1 .252-.61.785.785 0 0 1 .572-.254c.56 0 .84.446.84 1.338v.66c.336-.61.74-1.095 1.21-1.456.47-.362.902-.542 1.294-.542s.69.101.891.305c.213.192.32.451.32.779 0 .327-.08.604-.236.83-.157.214-.325.322-.504.322-.18 0-.32-.046-.42-.136a1.193 1.193 0 0 1-.202-.305.709.709 0 0 0-.252-.305.715.715 0 0 0-.47-.152c-.326 0-.65.214-.976.644-.324.429-.52 1.016-.588 1.761Zm10.314 1.71c.078.204.24.48.487.83.258.34.387.616.387.83 0 .215-.056.39-.168.526a.581.581 0 0 1-.454.186c-.46 0-.869-.48-1.227-1.44l-.135-.372c-.571 1.208-1.428 1.812-2.571 1.812-.571 0-1.048-.18-1.429-.542-.37-.373-.554-.835-.554-1.389 0-.858.291-1.598.874-2.219.582-.62 1.344-.954 2.285-.999-.224-.395-.476-.689-.756-.88-.269-.204-.515-.323-.74-.356a4.28 4.28 0 0 0-.638-.051.866.866 0 0 1-.454-.136c-.112-.079-.168-.231-.168-.457 0-.237.09-.43.27-.576.19-.147.414-.22.671-.22.729 0 1.446.367 2.152 1.1.705.735 1.322 1.886 1.848 3.456l.32.898Zm-2.925-1.88c-.403 0-.767.136-1.092.407-.314.271-.47.621-.47 1.05 0 .43.14.79.42 1.085.29.282.638.423 1.041.423.404 0 .751-.141 1.043-.423a1.42 1.42 0 0 0 .436-1.034c0-.282-.05-.542-.15-.779l-.186-.457c-.291-.18-.638-.271-1.042-.271ZM28.06 4.43c0 .362-.185.774-.555 1.237-.37.451-.767.677-1.193.677-.269 0-.588-.124-.958-.372-.37-.26-.667-.39-.89-.39-.225 0-.404.04-.538.119-.135.079-.219.163-.253.254-.09.26-.184.39-.285.39-.19 0-.286-.12-.286-.356 0-.249.134-.514.403-.796.28-.294.628-.44 1.042-.44.426 0 .863.09 1.311.27.448.17.768.254.958.254.202 0 .364-.09.488-.27a2.94 2.94 0 0 0 .285-.56c.068-.192.14-.288.219-.288.168 0 .252.09.252.271Zm3.68 4.963c-.493.497-.74 1.107-.74 1.83 0 .722.247 1.338.74 1.846.505.497 1.11.745 1.816.745.717 0 1.316-.248 1.798-.745.482-.508.723-1.124.723-1.846 0-.723-.241-1.333-.723-1.83-.482-.497-1.081-.745-1.798-.745-.706 0-1.311.248-1.816.745Zm.673 5.742c-.717 0-1.317-.282-1.799-.847-.481-.564-.722-1.27-.722-2.117 0-.858.263-1.682.79-2.473.526-.802 1.143-1.4 1.848-1.795.706-.396 1.418-.593 2.135-.593.717 0 1.316.282 1.798.847.482.564.723 1.276.723 2.134 0 .847-.264 1.671-.79 2.473-.527.79-1.143 1.383-1.849 1.778-.706.396-1.417.593-2.134.593ZM22.37 17.42c-.042 0-.568-.033-1.576-.1 0 .11-.017.529-.05 1.257-.034.728-.05 1.27-.05 1.626 0 .347.075.64.226.877.16.228.24.436.24.622a.641.641 0 0 1-.19.47.609.609 0 0 1-.428.178c-.42 0-.63-.335-.63-1.004l-.05-2.579c0-.525-.013-.995-.038-1.41h-.303a.418.418 0 0 1-.29-.101.414.414 0 0 1-.113-.305c0-.127.038-.225.113-.292a.391.391 0 0 1 .29-.115h.265a28.53 28.53 0 0 1-.026-1.003c0-.237.055-.424.164-.56a.524.524 0 0 1 .416-.215c.16 0 .29.068.391.203.101.127.151.339.151.635 0 .297-.012.623-.037.978l1.525-.101c.328 0 .491.156.491.47 0 .313-.163.47-.491.47Zm1.88.623c-.37.373-.555.83-.555 1.372 0 .542.185 1.004.554 1.385a1.87 1.87 0 0 0 1.362.559c.537 0 .987-.186 1.348-.559a1.94 1.94 0 0 0 .542-1.385c0-.542-.18-.999-.542-1.372a1.802 1.802 0 0 0-1.348-.559c-.53 0-.983.187-1.362.56Zm.503 4.307c-.537 0-.987-.212-1.348-.635-.362-.424-.542-.953-.542-1.588 0-.644.197-1.262.592-1.855.395-.601.857-1.05 1.387-1.347.53-.296 1.063-.444 1.6-.444.538 0 .988.211 1.35.635.36.423.541.957.541 1.6 0 .636-.197 1.254-.592 1.855-.395.593-.857 1.038-1.387 1.334-.53.297-1.063.445-1.6.445Zm8.362-2.249-.126-2.858c0-.229.055-.41.164-.546a.524.524 0 0 1 .416-.216c.16 0 .29.067.39.203.102.127.152.305.152.534 0 .22-.025.533-.075.94-.101.813-.152 1.541-.152 2.185 0 .254.08.5.24.736.168.23.252.437.252.623a.641.641 0 0 1-.19.47.609.609 0 0 1-.428.178c-.42 0-.63-.335-.63-1.004-.395.67-.89 1.004-1.487 1.004-.48 0-.862-.174-1.147-.521a3.043 3.043 0 0 1-.58-1.27l-.48-2.185a1.31 1.31 0 0 0-.34-.648c-.168-.195-.252-.39-.252-.585 0-.194.068-.351.202-.47a.674.674 0 0 1 .479-.19c.42 0 .693.334.82 1.003l.478 2.655c.16.847.56 1.27 1.198 1.27.31 0 .567-.122.769-.368.201-.254.31-.567.327-.94Zm3.883-.813.1 2.3c0 .228-.058.415-.176.559a.5.5 0 0 1-.794.012c-.1-.135-.151-.317-.151-.546 0-.229.021-.555.063-.978.084-.847.126-1.563.126-2.147 0-.254-.08-.495-.24-.724-.15-.237-.226-.449-.226-.635a.6.6 0 0 1 .189-.458.589.589 0 0 1 .428-.19c.42 0 .63.334.63 1.003v.496a3.45 3.45 0 0 1 .908-1.093c.353-.27.677-.406.97-.406.295 0 .518.076.669.228.16.144.24.34.24.585 0 .245-.06.453-.177.622-.118.161-.244.242-.378.242a.455.455 0 0 1-.315-.102.894.894 0 0 1-.152-.229.531.531 0 0 0-.189-.228.536.536 0 0 0-.353-.115c-.243 0-.487.161-.73.483-.244.322-.392.762-.442 1.321Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent